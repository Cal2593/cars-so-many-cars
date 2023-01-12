import { isEqual, isFuture, isPast, isWithinInterval } from "date-fns";
import { searchableUserReservationRequest } from "./Classes/searchableUserReservationRequest";
import { occupiedParkingBay } from "./Classes/occupiedParkingBay";
import { reservedParkingBay } from "./Classes/reservedParkingBay";
import { reservation } from "./Classes/reservation";
import { baseParkingBay } from "./Classes/baseParkingBay";
import { createReservation } from "./createReservation";

export function baySearch(data: searchableUserReservationRequest){
    const fs = require('fs');
    const parseISO = require('date-fns/parseISO');
    const isSameDay = require('date-fns/isSameDay');
    const toDate = require('date-fns/toDate');
    const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

    let occupiedBaysRaw = fs.readFileSync('../cars-so-many-cars/src/Arrays/occupiedBays.json');
    const occupiedBaysFile = JSON.parse(occupiedBaysRaw);

    let reservedBaysRaw = fs.readFileSync('../cars-so-many-cars/src/Arrays/reservedBays.json');
    const reservedBaysFile = JSON.parse(reservedBaysRaw);

    let reservationsRaw = fs.readFileSync('../cars-so-many-cars/src/Arrays/reservations.json');
    const reservationsFile = JSON.parse(reservationsRaw);

    let conflictBays: number[] = [];
    let currentlyOccupiedBays: number[] = [];
    let currentlyReservedBaysWithConflict: number[] = [];

    //This loop checks whether the vehicle already has a reservation for the selected date interval
    for(let i = 0;i<reservedBaysFile.length;i++){
        let resRecord: reservedParkingBay = new reservedParkingBay(
                    reservedBaysFile[i]._UID,
                    reservedBaysFile[i]._bayUID,
                    reservedBaysFile[i]._reservationUID,
                    reservedBaysFile[i]._reservedInterval
                )
        for(let j = 0;j<reservationsFile.length;j++){
            let reservationRecord: reservation = new reservation(
                reservationsFile[j]._UID,
                reservationsFile[j]._bayUID,
                reservationsFile[j]._userUID,
                reservationsFile[j]._vehicle,
                reservationsFile[j]._reservationInterval,
                reservationsFile[j]._reservationCreationTS,
                reservationsFile[j]._reservationUpdateTS,
                reservationsFile[j]._discountPercent,
                reservationsFile[j]._pricePaid
            )
            if(resRecord.reservationUID == reservationRecord.UID){
                if(reservationRecord.vehicle == data.vehicleRegistration){
                    let resRecordStart: Date = parseISO(reservationRecord.reservationInterval.start);
                    let resRecordEnd: Date = parseISO(reservationRecord.reservationInterval.end);
                    let resRecordInt: Interval = {start: resRecordStart, end: resRecordEnd};
                    if(areIntervalsOverlapping(resRecordInt,data.reservationIntervalDateTime)){
                        console.log("You can't book this vehicle in at the chosen time as it already has a reservation for the given time."); //return this to user
                        throw new Error("Vehicle can't be in two bays at the same time. This vehicle is booked at the same time in bay "+reservationRecord.bayUID+" reservation UID "+reservationRecord.UID)
                    }
                }
            }
        }
    }
    //This if statement is searching for any bays that would conflict with the new reservation request
    //This is so that when a bay is searched for we can skip over conflicting bays
    let resStartDateTime: Date = toDate(data.reservationIntervalDateTime.start);
    let resEndDateTime: Date = toDate(data.reservationIntervalDateTime.end);
    let now: Date = new Date();
    if(isSameDay(now,resEndDateTime)){
        if(isPast(resStartDateTime)||isEqual(new Date(),resStartDateTime)){
            for(let i=0;i<occupiedBaysFile.length;i++){
                let occEnd: Date = parseISO(occupiedBaysFile[i]._occupationEndDateTime)
                let occRecord: occupiedParkingBay = new occupiedParkingBay(
                    occupiedBaysFile[i]._UID,
                    occupiedBaysFile[i]._bayUID,
                    occupiedBaysFile[i]._reservationUID,
                    occEnd
                )
                currentlyOccupiedBays.push(occRecord.bayUID);
            }
            for(let i=0;i<reservedBaysFile.length;i++){
                let intStart: Date = parseISO(reservedBaysFile[i]._reservedInterval.start);
                let intEnd: Date = parseISO(reservedBaysFile[i]._reservedInterval.end);
                let newInt: Interval = {start: intStart, end: intEnd};
                let resRecord: reservedParkingBay = new reservedParkingBay(
                    reservedBaysFile[i]._UID,
                    reservedBaysFile[i]._bayUID,
                    reservedBaysFile[i]._reservationUID,
                    newInt
                )
                if(areIntervalsOverlapping(data.reservationIntervalDateTime,resRecord.reservedInterval)){
                    currentlyReservedBaysWithConflict.push(resRecord.bayUID);
                }
            }
            conflictBays = currentlyOccupiedBays.concat(currentlyReservedBaysWithConflict);
        }else{
            for(let i=0;i<occupiedBaysFile.length;i++){
                let occEnd: Date = parseISO(occupiedBaysFile[i]._occupationEndDateTime)
                let occRecord: occupiedParkingBay = new occupiedParkingBay(
                    occupiedBaysFile[i]._UID,
                    occupiedBaysFile[i]._bayUID,
                    occupiedBaysFile[i]._reservationUID,
                    occEnd
                )
                if(isWithinInterval(parseISO(occRecord.occupationEndDateTime),data.reservationIntervalDateTime)){
                    currentlyOccupiedBays.push(occRecord.bayUID);
                }
            }
            for(let i=0;i<reservedBaysFile.length;i++){
                let intStart: Date = parseISO(reservedBaysFile[i]._reservedInterval.start);
                let intEnd: Date = parseISO(reservedBaysFile[i]._reservedInterval.end);
                let newInt: Interval = {start: intStart, end: intEnd};
                let resRecord: reservedParkingBay = new reservedParkingBay(
                    reservedBaysFile[i]._UID,
                    reservedBaysFile[i]._bayUID,
                    reservedBaysFile[i]._reservationUID,
                    newInt
                )
                if(areIntervalsOverlapping(data.reservationIntervalDateTime,resRecord.reservedInterval)){
                    currentlyReservedBaysWithConflict.push(resRecord.bayUID);
                }
            }
            conflictBays = currentlyOccupiedBays.concat(currentlyReservedBaysWithConflict);
        }
    }else if(!isSameDay(now,resEndDateTime)&&isFuture(resStartDateTime)){
        for(let i=0;i<reservedBaysFile.length;i++){
            let intStart: Date = parseISO(reservedBaysFile[i]._reservedInterval.start);
            let intEnd: Date = parseISO(reservedBaysFile[i]._reservedInterval.end);
            let newInt: Interval = {start: intStart, end: intEnd};
            let resRecord: reservedParkingBay = new reservedParkingBay(
                reservedBaysFile[i]._UID,
                reservedBaysFile[i]._bayUID,
                reservedBaysFile[i]._reservationUID,
                newInt
            )
            if(areIntervalsOverlapping(data.reservationIntervalDateTime,resRecord.reservedInterval)){
                currentlyReservedBaysWithConflict.push(resRecord.bayUID);
            }
        }
        conflictBays = currentlyReservedBaysWithConflict;
    }else{
        throw new Error("Please select a date in the future");
    }

    //now that conflictBays has been populated, a bay can be searched for that meets
    //the reservation criteria and ignores any bay that would conflict.
    
    let BaysRaw = fs.readFileSync('../cars-so-many-cars/src/Arrays/'+data.specificLocationRequired+'Bays.json');
    let BaysFile = JSON.parse(BaysRaw);
    
    //We now look through the request to work out what bay type is being requested
    let searchBayType: string;
    switch(data.vehicleForm){
        case "Car":
        case "Tricycle":
            if(data.accessibleSpotRequired){
                searchBayType = "Accessible";
            }else if(data.electricChargingRequired){
                searchBayType = "ElectricCharging";
            }else if(data.valetSpotRequired){
                searchBayType = "Valet";
            }else{
                searchBayType = "Standard";
            }
            break;
        case "Motorhome/Caravan":
            searchBayType = "MotorhomeAndCaravan";
            break;
        case "Lorry":
            searchBayType = "Lorry";
            break;
        case "Motorbike":
            searchBayType = "Motorbike";
            break;
        default:
            searchBayType = "Standard";
    }
    //This loop begins to look through the bays to find one which matches the searched criteria
    let found: boolean = false;
    for(let i=0;i<BaysFile.length && found == false;i++){
        let bay: baseParkingBay = new baseParkingBay(
            BaysFile[i]._UID,
            BaysFile[i]._Reference,
            BaysFile[i]._Type,
            BaysFile[i]._Location,
            BaysFile[i]._covering,
            BaysFile[i]._electric,
            BaysFile[i]._valet
        )
        if(bay.Type == searchBayType){
            let conflict: boolean = false;
            for (let j = 0;j<conflictBays.length;j++){
                if(bay.UID == conflictBays[j]){
                    conflict = true;
                }
            }
            if(!conflict){
                switch(searchBayType){
                    case "Standard":
                        if(data.coveredSpotRequired == bay.covering){
                            //use this bay
                            console.log(bay);
                            createReservation(bay,data);
                            found = true;
                        }
                        break;
                    case "Motorbike": //can't be electric/valeted
                    case "ElectricCharging":
                    case "Valet":
                    case "Lorry":
                        //use this bay
                        console.log(bay);
                        createReservation(bay,data);
                        found = true;
                        break;
                    case "MotorhomeAndCaravan": //can't be covered/valeted
                    case "Accessible":
                        if(data.electricChargingRequired == bay.electric){
                            //use this bay
                            console.log(bay);
                            createReservation(bay,data);
                            found = true;
                        };
                        break;
                    default:
                        createReservation(bay,data);
                        console.log("Hitting default bay type "+searchBayType)
                        found = true;
                        break;
                }
            }
        }
    }
}
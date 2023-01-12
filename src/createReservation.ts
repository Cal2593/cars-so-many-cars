import { isWithinInterval, intervalToDuration, isEqual, toDate } from "date-fns";
import { baseParkingBay } from "./Classes/baseParkingBay";
import { occupiedParkingBay } from "./Classes/occupiedParkingBay";
import { reservation } from "./Classes/reservation";
import { reservedParkingBay } from "./Classes/reservedParkingBay";
import { searchableUserReservationRequest } from "./Classes/searchableUserReservationRequest";
import { user } from "./Classes/user";
import { getUser } from "./getUser";

export function createReservation(bay:baseParkingBay,resReq: searchableUserReservationRequest){
    const fs = require('fs');
    let reservationsRaw = fs.readFileSync('../cars-so-many-cars/src/Arrays/reservations.json');
    const reservationsFile = JSON.parse(reservationsRaw);

    let reservationUIDRawFile = fs.readFileSync('../cars-so-many-cars/src/Arrays/reservationUID.json');
    const reservationUIDFinalFile = JSON.parse(reservationUIDRawFile);

    let use: user = getUser(resReq.userID)!;
    
    let UID: number = reservationUIDFinalFile.lastID+1;
    let bayUID: number = bay.UID;
    let userUID: number = resReq.userID;
    let vehicle: string = resReq.vehicleRegistration;
    let resInterval: Interval = resReq.reservationIntervalDateTime
    let resCreate: Date = new Date();
    let resUpdate: Date = new Date();
    let discount: number;  
    switch(use.paymentPlan){
        case "Monthly":
            discount = 20;
            break;
        case "Annual":
            discount = 40;
            break;
        default:
            discount = 0;
    };
    let pricePerHour: number = 0;
    switch(bay.Type){
        case "Lorry":
            pricePerHour = 5;
            break;
        case "MotorhomeAndCaravan":
            if(resReq.electricChargingRequired){
                pricePerHour = 3;
            }else{
                pricePerHour = 2;
            }
            break;
        case "Valet":
            pricePerHour = 3;
            break;
        case "ElectricCharging":
            pricePerHour = 2;
            break;
        case "Motorbike":
        case "Accessible":
        case "Standard":
            pricePerHour = 1;
            break;
    }
    let duration: Duration = intervalToDuration(resReq.reservationIntervalDateTime);
    let hours = duration.hours!;
    let minutes = duration.minutes!;
    let factor = 10 ** 2;
    let finalMinutes = Math.round(minutes * factor)/factor;
    let finalDuration: number = hours+finalMinutes;
    let durationPrice: number = pricePerHour*finalDuration;
    let finalDurationPrice = Math.round(durationPrice*factor)/factor;
    let price: number = (finalDurationPrice-(finalDurationPrice*discount)/100);
    
    let res: reservation = new reservation(
        UID,
        bayUID,
        userUID,
        vehicle,
        resInterval,
        resCreate,
        resUpdate,
        discount,
        price
    )
    let finalUID: string = "{\"lastID\":"+UID+"}";
    fs.writeFileSync('../cars-so-many-cars/src/Arrays/reservationUID.json',finalUID, (err:any) => {
        if (err) throw err;
    });

    reservationsFile.push(res)
    let finalReservationsFile: string = JSON.stringify(reservationsFile, null, 2);
    fs.writeFileSync('../cars-so-many-cars/src/Arrays/reservations.json',finalReservationsFile, (err:any) => {
        if (err) throw err;
    });

    let usersRawFile = fs.readFileSync('../cars-so-many-cars/src/Arrays/userList.json');
    const usersFinalFile = JSON.parse(usersRawFile);
    let found = false;
    for(let i = 0; i<usersFinalFile.length && found == false; i++){
        let userRec: user = new user(
            usersFinalFile[i]._UID,
            usersFinalFile[i]._firstName,
            usersFinalFile[i]._lastName,
            usersFinalFile[i]._email,
            usersFinalFile[i]._phone,
            usersFinalFile[i]._address,
            usersFinalFile[i]._isActive,
            usersFinalFile[i]._userCreated,
            usersFinalFile[i]._userUpdated,
            usersFinalFile[i]._paymentPlan,
            usersFinalFile[i]._vehicles,
            usersFinalFile[i]._password,
            usersFinalFile[i]._reservations
        )
        if(userRec.UID == resReq.userID){
            userRec.reservations.push(res.UID);
            found = true;
        }
    }

    let finalUserList: string = JSON.stringify(usersFinalFile,null,2);
    fs.writeFileSync("../cars-so-many-cars/src/Arrays/userList.json",finalUserList, (err:any) => {
        if(err) throw err;
    })

    if(isWithinInterval(new Date(),resReq.reservationIntervalDateTime)||isEqual(new Date(),resReq.reservationIntervalDateTime.start)){
        //create occupied bay
        let occupiedBaysRaw = fs.readFileSync('../cars-so-many-cars/src/Arrays/occupiedBays.json');
        const occupiedBaysFile = JSON.parse(occupiedBaysRaw);

        let occupiedUIDRawFile = fs.readFileSync('../cars-so-many-cars/src/Arrays/occupiedUID.json');
        const occupiedUIDFinalFile = JSON.parse(occupiedUIDRawFile);

        let lastoccUID: number = occupiedUIDFinalFile.lastID +1;

        let occRecord: occupiedParkingBay = new occupiedParkingBay(
            lastoccUID,
            res.bayUID,
            res.UID,
            toDate(res.reservationInterval.end)
        )

        occupiedBaysFile.push(occRecord);
        let finalOccupiedArr: string = JSON.stringify(occupiedBaysFile,null,2);
            fs.writeFileSync("../cars-so-many-cars/src/Arrays/occupiedBays.json",finalOccupiedArr, (err:any) => {
            if(err) throw err;
        });

        let finaloccUID: string = "{\"lastID\":"+lastoccUID+"}";
        fs.writeFileSync('../cars-so-many-cars/src/Arrays/occupiedUID.json',finaloccUID, (err:any) => {
            if (err) throw err;
        });
        console.log(occRecord.UID+" occupied UID")
    }else{
        //create reserved bay
        let reservedBaysRaw = fs.readFileSync('../cars-so-many-cars/src/Arrays/reservedBays.json');
        const reservedBaysFile = JSON.parse(reservedBaysRaw);

        let reservedUIDRawFile = fs.readFileSync('../cars-so-many-cars/src/Arrays/reservedUID.json');
        const reservedUIDFinalFile = JSON.parse(reservedUIDRawFile);

        let lastresUID: number = reservedUIDFinalFile.lastID +1;

        let reservedRecord: reservedParkingBay = new reservedParkingBay(
            lastresUID,
            res.bayUID,
            res.UID,
            res.reservationInterval
        )

        reservedBaysFile.push(reservedRecord);
        let finalReservedArr: string = JSON.stringify(reservedBaysFile,null,2);
        fs.writeFileSync("../cars-so-many-cars/src/Arrays/reservedBays.json",finalReservedArr, (err:any) => {
            if(err) throw err;
        });

        let finalresUID: string = "{\"lastID\":"+lastresUID+"}";
        fs.writeFileSync('../cars-so-many-cars/src/Arrays/reservedUID.json',finalresUID, (err:any) => {
            if (err) throw err;
        });
        console.log(reservedRecord.UID+ " reserved UID");
    }
    console.log(res.UID+" reservation UID");
    console.log(res.bayUID+ " reservation bay");
}
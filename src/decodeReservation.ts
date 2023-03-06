import { decodedReservation } from "./Classes/decodedReservation";
import { reservation } from "./Classes/reservation";
import { toDate, format } from "date-fns";
import { baseParkingBay } from "./Classes/baseParkingBay";

export function decodeReservation(
    data: reservation,
    callback: (returnData: decodedReservation) => void
) {
    const fs = require('fs');
    const bristolBaysRaw = fs.readFileSync(
        '../cars-so-many-cars/src/Arrays/BristolBays.json'
    );
    const bristolFile = JSON.parse(bristolBaysRaw);
    let found = false;
    let bayRef: string = "";
    let bayLoc: string = "";
    for (let i=0; i< bristolFile.length && found == false; i++) {
        const bay: baseParkingBay = new baseParkingBay(
            bristolFile[i]._UID,
            bristolFile[i]._Reference,
            bristolFile[i]._Type,
            bristolFile[i]._Location,
            bristolFile[i]._covering,
            bristolFile[i]._electric,
            bristolFile[i]._valet
        );
        if(data.bayUID == bay.UID){
            found = true;
            bayRef = bay.Reference;
            bayLoc = bay.Location;
        }
    }
    if(found == false){
        const gloucesterBaysRaw = fs.readFileSync(
            '../cars-so-many-cars/src/Arrays/GloucesterBays.json'
        );
        const gloucesterFile = JSON.parse(gloucesterBaysRaw);
        for (let i=0; i< gloucesterFile.length && found == false; i++) {
            const bay: baseParkingBay = new baseParkingBay(
                gloucesterFile[i]._UID,
                gloucesterFile[i]._Reference,
                gloucesterFile[i]._Type,
                gloucesterFile[i]._Location,
                gloucesterFile[i]._covering,
                gloucesterFile[i]._electric,
                gloucesterFile[i]._valet
            );
            if(data.bayUID == bay.UID){
                found = true;
                bayRef = bay.Reference;
                bayLoc = bay.Location;
            }
        }
    }
    if(found == false){
        const yateBaysRaw = fs.readFileSync(
            '../cars-so-many-cars/src/Arrays/YateBays.json'
        );
        const yateFile = JSON.parse(yateBaysRaw);
        for (let i=0; i< yateFile.length && found == false; i++) {
            const bay: baseParkingBay = new baseParkingBay(
                yateFile[i]._UID,
                yateFile[i]._Reference,
                yateFile[i]._Type,
                yateFile[i]._Location,
                yateFile[i]._covering,
                yateFile[i]._electric,
                yateFile[i]._valet
            );
            if(data.bayUID == bay.UID){
                found = true;
                bayRef = bay.Reference;
                bayLoc = bay.Location;
            }
        }
    }
    
    const bayID: string = bayRef;
    const veh: string = data.vehicle;
    const resDate: string = format(toDate(data.reservationInterval.start),'y/MM/dd')
    const resStart: string = format(toDate(data.reservationInterval.start),'HH:mm')
    const resEnd: string = format(toDate(data.reservationInterval.end),'HH:mm')
    const resLocation: string = bayLoc;
    const resPrice: number = data.pricePaid;

    const returnData: decodedReservation = new decodedReservation(
        bayID,
        veh,
        resDate,
        resStart,
        resEnd,
        resLocation,
        resPrice
    );
    callback(returnData)
}
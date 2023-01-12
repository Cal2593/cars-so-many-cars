import { occupiedParkingBay } from "./Classes/occupiedParkingBay";
import { reservedParkingBay } from "./Classes/reservedParkingBay";

export function occupiedReservedBaysDBRefresh(){
    const fs = require('fs');
    const isPast = require('date-fns/isPast');
    const isFuture = require('date-fns/isFuture');
    const parseISO = require('date-fns/parseISO');

    let occupiedBaysRaw = fs.readFileSync('../cars-so-many-cars/src/Arrays/occupiedBays.json');
    const occupiedBaysFile = JSON.parse(occupiedBaysRaw);

    let occupiedUIDRawFile = fs.readFileSync('../cars-so-many-cars/src/Arrays/occupiedUID.json');
    const occupiedUIDFinalFile = JSON.parse(occupiedUIDRawFile);

    let lastoccUID: number = occupiedUIDFinalFile.lastID;

    let reservedBaysRaw = fs.readFileSync('../cars-so-many-cars/src/Arrays/reservedBays.json');
    const reservedBaysFile = JSON.parse(reservedBaysRaw);

    for(let i = 0; i<occupiedBaysFile.length; i++){
        let occRecord: occupiedParkingBay = new occupiedParkingBay(
            occupiedBaysFile[i]._UID,
            occupiedBaysFile[i]._bayUID,
            occupiedBaysFile[i]._reservationUID,
            occupiedBaysFile[i]._occupationEndDateTime
        )
        let converted: Date = parseISO(occRecord.occupationEndDateTime);
        if(isPast(converted)){
            occupiedBaysFile.splice(i,1);
            i = i-1;
        };
    };

    for(let i = 0; i<reservedBaysFile.length;i++){
        let resRecord: reservedParkingBay = new reservedParkingBay(
            reservedBaysFile[i]._UID,
            reservedBaysFile[i]._bayUID,
            reservedBaysFile[i]._reservationUID,
            reservedBaysFile[i]._reservedInterval
        )
        let endConverted: Date = parseISO(resRecord.reservedInterval.end);
        if(isPast(endConverted)){
            reservedBaysFile.splice(i,1);
        }
        let startConverted: Date = parseISO(resRecord.reservedInterval.start);
        if(!isFuture(startConverted)){
            if(isFuture(endConverted)){
                let UID = lastoccUID+1;
                let bayUID = resRecord.bayUID;
                let resUID = resRecord.reservationUID;
                let occEnd = endConverted;

                let newOccRecord: occupiedParkingBay = new occupiedParkingBay(
                    UID,
                    bayUID,
                    resUID,
                    occEnd
                );
                
                occupiedBaysFile.push(newOccRecord);
                reservedBaysFile.splice(i,1);
                i=i-1;
                lastoccUID = UID;
            }
        }
    }
    let finalOccupiedArr: string = JSON.stringify(occupiedBaysFile, null, 2);
    let finalReservedArr: string = JSON.stringify(reservedBaysFile, null, 2);

    fs.writeFileSync("../cars-so-many-cars/src/Arrays/occupiedBays.json",finalOccupiedArr, (err:any) => {
        if(err) throw err;
    });
    fs.writeFileSync("../cars-so-many-cars/src/Arrays/reservedBays.json",finalReservedArr, (err:any) => {
        if(err) throw err;
    });

    let finaloccUID: string = "{\"lastID\":"+lastoccUID+"}";
    fs.writeFileSync('../cars-so-many-cars/src/Arrays/occupiedUID.json',finaloccUID, (err:any) => {
        if (err) throw err;
    });
};
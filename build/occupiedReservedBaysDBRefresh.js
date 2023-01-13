"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.occupiedReservedBaysDBRefresh = void 0;
const occupiedParkingBay_1 = require("./Classes/occupiedParkingBay");
const reservedParkingBay_1 = require("./Classes/reservedParkingBay");
function occupiedReservedBaysDBRefresh() {
    const fs = require('fs');
    const isPast = require('date-fns/isPast');
    const isFuture = require('date-fns/isFuture');
    const parseISO = require('date-fns/parseISO');
    const occupiedBaysRaw = fs.readFileSync('../cars-so-many-cars/src/Arrays/occupiedBays.json');
    const occupiedBaysFile = JSON.parse(occupiedBaysRaw);
    const occupiedUIDRawFile = fs.readFileSync('../cars-so-many-cars/src/Arrays/occupiedUID.json');
    const occupiedUIDFinalFile = JSON.parse(occupiedUIDRawFile);
    let lastoccUID = occupiedUIDFinalFile.lastID;
    const reservedBaysRaw = fs.readFileSync('../cars-so-many-cars/src/Arrays/reservedBays.json');
    const reservedBaysFile = JSON.parse(reservedBaysRaw);
    for (let i = 0; i < occupiedBaysFile.length; i++) {
        const occRecord = new occupiedParkingBay_1.occupiedParkingBay(occupiedBaysFile[i]._UID, occupiedBaysFile[i]._bayUID, occupiedBaysFile[i]._reservationUID, occupiedBaysFile[i]._occupationEndDateTime);
        const converted = parseISO(occRecord.occupationEndDateTime);
        if (isPast(converted)) {
            occupiedBaysFile.splice(i, 1);
            i = i - 1;
        }
    }
    for (let i = 0; i < reservedBaysFile.length; i++) {
        const resRecord = new reservedParkingBay_1.reservedParkingBay(reservedBaysFile[i]._UID, reservedBaysFile[i]._bayUID, reservedBaysFile[i]._reservationUID, reservedBaysFile[i]._reservedInterval);
        const endConverted = parseISO(resRecord.reservedInterval.end);
        if (isPast(endConverted)) {
            reservedBaysFile.splice(i, 1);
        }
        const startConverted = parseISO(resRecord.reservedInterval.start);
        if (!isFuture(startConverted)) {
            if (isFuture(endConverted)) {
                const UID = lastoccUID + 1;
                const bayUID = resRecord.bayUID;
                const resUID = resRecord.reservationUID;
                const occEnd = endConverted;
                const newOccRecord = new occupiedParkingBay_1.occupiedParkingBay(UID, bayUID, resUID, occEnd);
                occupiedBaysFile.push(newOccRecord);
                reservedBaysFile.splice(i, 1);
                i = i - 1;
                lastoccUID = UID;
            }
        }
    }
    const finalOccupiedArr = JSON.stringify(occupiedBaysFile, null, 2);
    const finalReservedArr = JSON.stringify(reservedBaysFile, null, 2);
    fs.writeFileSync('../cars-so-many-cars/src/Arrays/occupiedBays.json', finalOccupiedArr, (err) => {
        if (err)
            throw err;
    });
    fs.writeFileSync('../cars-so-many-cars/src/Arrays/reservedBays.json', finalReservedArr, (err) => {
        if (err)
            throw err;
    });
    const finaloccUID = '{"lastID":' + lastoccUID + '}';
    fs.writeFileSync('../cars-so-many-cars/src/Arrays/occupiedUID.json', finaloccUID, (err) => {
        if (err)
            throw err;
    });
}
exports.occupiedReservedBaysDBRefresh = occupiedReservedBaysDBRefresh;

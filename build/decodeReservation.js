"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeReservation = void 0;
const decodedReservation_1 = require("./Classes/decodedReservation");
const date_fns_1 = require("date-fns");
const baseParkingBay_1 = require("./Classes/baseParkingBay");
function decodeReservation(data, callback) {
    const fs = require('fs');
    const bristolBaysRaw = fs.readFileSync('../cars-so-many-cars/src/Arrays/BristolBays.json');
    const bristolFile = JSON.parse(bristolBaysRaw);
    let found = false;
    let bayRef = "";
    let bayLoc = "";
    for (let i = 0; i < bristolFile.length && found == false; i++) {
        const bay = new baseParkingBay_1.baseParkingBay(bristolFile[i]._UID, bristolFile[i]._Reference, bristolFile[i]._Type, bristolFile[i]._Location, bristolFile[i]._covering, bristolFile[i]._electric, bristolFile[i]._valet);
        if (data.bayUID == bay.UID) {
            found = true;
            bayRef = bay.Reference;
            bayLoc = bay.Location;
        }
    }
    if (found == false) {
        const gloucesterBaysRaw = fs.readFileSync('../cars-so-many-cars/src/Arrays/GloucesterBays.json');
        const gloucesterFile = JSON.parse(gloucesterBaysRaw);
        for (let i = 0; i < gloucesterFile.length && found == false; i++) {
            const bay = new baseParkingBay_1.baseParkingBay(gloucesterFile[i]._UID, gloucesterFile[i]._Reference, gloucesterFile[i]._Type, gloucesterFile[i]._Location, gloucesterFile[i]._covering, gloucesterFile[i]._electric, gloucesterFile[i]._valet);
            if (data.bayUID == bay.UID) {
                found = true;
                bayRef = bay.Reference;
                bayLoc = bay.Location;
            }
        }
    }
    if (found == false) {
        const yateBaysRaw = fs.readFileSync('../cars-so-many-cars/src/Arrays/YateBays.json');
        const yateFile = JSON.parse(yateBaysRaw);
        for (let i = 0; i < yateFile.length && found == false; i++) {
            const bay = new baseParkingBay_1.baseParkingBay(yateFile[i]._UID, yateFile[i]._Reference, yateFile[i]._Type, yateFile[i]._Location, yateFile[i]._covering, yateFile[i]._electric, yateFile[i]._valet);
            if (data.bayUID == bay.UID) {
                found = true;
                bayRef = bay.Reference;
                bayLoc = bay.Location;
            }
        }
    }
    const bayID = bayRef;
    const veh = data.vehicle;
    const resDate = (0, date_fns_1.format)((0, date_fns_1.toDate)(data.reservationInterval.start), 'y/MM/dd');
    const resStart = (0, date_fns_1.format)((0, date_fns_1.toDate)(data.reservationInterval.start), 'HH:mm');
    const resEnd = (0, date_fns_1.format)((0, date_fns_1.toDate)(data.reservationInterval.end), 'HH:mm');
    const resLocation = bayLoc;
    const resPrice = data.pricePaid;
    const returnData = new decodedReservation_1.decodedReservation(bayID, veh, resDate, resStart, resEnd, resLocation, resPrice);
    callback(returnData);
}
exports.decodeReservation = decodeReservation;

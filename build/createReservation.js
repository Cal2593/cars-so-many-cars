"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReservation = void 0;
const date_fns_1 = require("date-fns");
const occupiedParkingBay_1 = require("./Classes/occupiedParkingBay");
const reservation_1 = require("./Classes/reservation");
const reservedParkingBay_1 = require("./Classes/reservedParkingBay");
const user_1 = require("./Classes/user");
const getUser_1 = require("./getUser");
function createReservation(bay, resReq) {
    const fs = require('fs');
    const reservationsRaw = fs.readFileSync('../cars-so-many-cars/src/Arrays/reservations.json');
    const reservationsFile = JSON.parse(reservationsRaw);
    const reservationUIDRawFile = fs.readFileSync('../cars-so-many-cars/src/Arrays/reservationUID.json');
    const reservationUIDFinalFile = JSON.parse(reservationUIDRawFile);
    const use = (0, getUser_1.getUser)(resReq.userID);
    const UID = reservationUIDFinalFile.lastID + 1;
    const bayUID = bay.UID;
    const userUID = resReq.userID;
    const vehicle = resReq.vehicleRegistration;
    const resInterval = resReq.reservationIntervalDateTime;
    const resCreate = new Date();
    const resUpdate = new Date();
    let discount;
    switch (use.paymentPlan) {
        case 'Monthly':
            discount = 20;
            break;
        case 'Annual':
            discount = 40;
            break;
        default:
            discount = 0;
    }
    let pricePerHour = 0;
    switch (bay.Type) {
        case 'Lorry':
            pricePerHour = 5;
            break;
        case 'MotorhomeAndCaravan':
            if (resReq.electricChargingRequired) {
                pricePerHour = 3;
            }
            else {
                pricePerHour = 2;
            }
            break;
        case 'Valet':
            pricePerHour = 3;
            break;
        case 'ElectricCharging':
            pricePerHour = 2;
            break;
        case 'Motorbike':
        case 'Accessible':
        case 'Standard':
            pricePerHour = 1;
            break;
    }
    const duration = (0, date_fns_1.intervalToDuration)(resReq.reservationIntervalDateTime);
    const hours = duration.hours;
    const minutes = duration.minutes;
    const factor = 10 ** 2;
    const finalMinutes = Math.round(minutes * factor) / factor;
    const finalDuration = hours + finalMinutes;
    const durationPrice = pricePerHour * finalDuration;
    const finalDurationPrice = Math.round(durationPrice * factor) / factor;
    const price = finalDurationPrice - (finalDurationPrice * discount) / 100;
    const res = new reservation_1.reservation(UID, bayUID, userUID, vehicle, resInterval, resCreate, resUpdate, discount, price);
    const finalUID = '{"lastID":' + UID + '}';
    fs.writeFileSync('../cars-so-many-cars/src/Arrays/reservationUID.json', finalUID, (err) => {
        if (err)
            throw err;
    });
    reservationsFile.push(res);
    const finalReservationsFile = JSON.stringify(reservationsFile, null, 2);
    fs.writeFileSync('../cars-so-many-cars/src/Arrays/reservations.json', finalReservationsFile, (err) => {
        if (err)
            throw err;
    });
    const usersRawFile = fs.readFileSync('../cars-so-many-cars/src/Arrays/userList.json');
    const usersFinalFile = JSON.parse(usersRawFile);
    let found = false;
    for (let i = 0; i < usersFinalFile.length && found == false; i++) {
        const userRec = new user_1.user(usersFinalFile[i]._UID, usersFinalFile[i]._firstName, usersFinalFile[i]._lastName, usersFinalFile[i]._email, usersFinalFile[i]._phone, usersFinalFile[i]._address, usersFinalFile[i]._isActive, usersFinalFile[i]._userCreated, usersFinalFile[i]._userUpdated, usersFinalFile[i]._paymentPlan, usersFinalFile[i]._vehicles, usersFinalFile[i]._password, usersFinalFile[i]._reservations);
        if (userRec.UID == resReq.userID) {
            userRec.reservations.push(res.UID);
            found = true;
        }
    }
    const finalUserList = JSON.stringify(usersFinalFile, null, 2);
    fs.writeFileSync('../cars-so-many-cars/src/Arrays/userList.json', finalUserList, (err) => {
        if (err)
            throw err;
    });
    if ((0, date_fns_1.isWithinInterval)(new Date(), resReq.reservationIntervalDateTime) ||
        (0, date_fns_1.isEqual)(new Date(), resReq.reservationIntervalDateTime.start)) {
        //create occupied bay
        const occupiedBaysRaw = fs.readFileSync('../cars-so-many-cars/src/Arrays/occupiedBays.json');
        const occupiedBaysFile = JSON.parse(occupiedBaysRaw);
        const occupiedUIDRawFile = fs.readFileSync('../cars-so-many-cars/src/Arrays/occupiedUID.json');
        const occupiedUIDFinalFile = JSON.parse(occupiedUIDRawFile);
        const lastoccUID = occupiedUIDFinalFile.lastID + 1;
        const occRecord = new occupiedParkingBay_1.occupiedParkingBay(lastoccUID, res.bayUID, res.UID, (0, date_fns_1.toDate)(res.reservationInterval.end));
        occupiedBaysFile.push(occRecord);
        const finalOccupiedArr = JSON.stringify(occupiedBaysFile, null, 2);
        fs.writeFileSync('../cars-so-many-cars/src/Arrays/occupiedBays.json', finalOccupiedArr, (err) => {
            if (err)
                throw err;
        });
        const finaloccUID = '{"lastID":' + lastoccUID + '}';
        fs.writeFileSync('../cars-so-many-cars/src/Arrays/occupiedUID.json', finaloccUID, (err) => {
            if (err)
                throw err;
        });
        console.log(occRecord.UID + ' occupied UID');
    }
    else {
        //create reserved bay
        const reservedBaysRaw = fs.readFileSync('../cars-so-many-cars/src/Arrays/reservedBays.json');
        const reservedBaysFile = JSON.parse(reservedBaysRaw);
        const reservedUIDRawFile = fs.readFileSync('../cars-so-many-cars/src/Arrays/reservedUID.json');
        const reservedUIDFinalFile = JSON.parse(reservedUIDRawFile);
        const lastresUID = reservedUIDFinalFile.lastID + 1;
        const reservedRecord = new reservedParkingBay_1.reservedParkingBay(lastresUID, res.bayUID, res.UID, res.reservationInterval);
        reservedBaysFile.push(reservedRecord);
        const finalReservedArr = JSON.stringify(reservedBaysFile, null, 2);
        fs.writeFileSync('../cars-so-many-cars/src/Arrays/reservedBays.json', finalReservedArr, (err) => {
            if (err)
                throw err;
        });
        const finalresUID = '{"lastID":' + lastresUID + '}';
        fs.writeFileSync('../cars-so-many-cars/src/Arrays/reservedUID.json', finalresUID, (err) => {
            if (err)
                throw err;
        });
        console.log(reservedRecord.UID + ' reserved UID');
    }
    console.log(res.UID + ' reservation UID');
    console.log(res.bayUID + ' reservation bay');
}
exports.createReservation = createReservation;

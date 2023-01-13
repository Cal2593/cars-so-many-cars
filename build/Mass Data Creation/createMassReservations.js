"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMassReservations = void 0;
const date_fns_1 = require("date-fns");
const reservation_1 = require("../Classes/reservation");
const user_1 = require("../Classes/user");
const setBayOccupiedStatus_1 = require("./setBayOccupiedStatus");
const setBayReservedStatus_1 = require("./setBayReservedStatus");
function createMassReservations(numToCreate) {
    const fs = require('fs');
    const add = require('date-fns/add');
    const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');
    const toDate = require('date-fns/toDate');
    const uidRawFile = fs.readFileSync('../cars-so-many-cars/src/Arrays/reservationUID.json');
    const uidFinalFile = JSON.parse(uidRawFile);
    const reservedUIDRawFile = fs.readFileSync('../cars-so-many-cars/src/Arrays/reservedUID.json');
    const reservedUIDFinalFile = JSON.parse(reservedUIDRawFile);
    const occupiedUIDRawFile = fs.readFileSync('../cars-so-many-cars/src/Arrays/occupiedUID.json');
    const occupiedUIDFinalFile = JSON.parse(occupiedUIDRawFile);
    const bayRawFile = fs.readFileSync('../cars-so-many-cars/src/Arrays/BristolBays.json');
    const bayFinalFile = JSON.parse(bayRawFile);
    const usersRawFile = fs.readFileSync('../cars-so-many-cars/src/Arrays/userList.json');
    const usersFinalFile = JSON.parse(usersRawFile);
    let lastUID = uidFinalFile.lastID;
    let lastresUID = reservedUIDFinalFile.lastID;
    let lastoccUID = occupiedUIDFinalFile.lastID;
    const reservationsArr = [];
    const occupiedArr = [];
    const reservedArr = [];
    for (let i = 0; i < numToCreate; i++) {
        const UID = lastUID + 1;
        let a = Math.floor(Math.random() * 100);
        const bayUID = bayFinalFile[a]._UID;
        a = Math.floor(Math.random() * usersFinalFile.length);
        const record = a;
        const use = new user_1.user(usersFinalFile[record]._UID, usersFinalFile[record]._firstName, usersFinalFile[record]._lastName, usersFinalFile[record]._email, usersFinalFile[record]._phone, usersFinalFile[record]._address, usersFinalFile[record]._isActive, usersFinalFile[record]._userCreated, usersFinalFile[record]._userUpdated, usersFinalFile[record]._paymentPlan, usersFinalFile[record]._vehicles, usersFinalFile[record]._password, usersFinalFile[record]._reservations);
        const UUID = use.UID;
        let vehicle;
        if (use.vehicles.length > 1) {
            a = Math.floor(Math.random() * 2);
            vehicle = use.vehicles[a];
        }
        else {
            vehicle = use.vehicles[0];
        }
        a = Math.floor(Math.random() * 60);
        const b = Math.floor(Math.random() * 13);
        const c = Math.floor(Math.random() * (13 - b + 1) + b + 1);
        const resInt = {
            start: add(new Date(2023, 0, 6, 6), { days: a, hours: b }),
            end: add(new Date(2023, 0, 6, 6), { days: a, hours: c })
        }; //need to add maxes / mins}
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
        const price = 5 - (5 * discount) / 100;
        const res = new reservation_1.reservation(UID, bayUID, UUID, vehicle, resInt, resCreate, resUpdate, discount, price);
        let resConflict = false;
        for (let i = 0; i < reservationsArr.length; i++) {
            if (res.bayUID == reservationsArr[i].bayUID) {
                if (areIntervalsOverlapping(res.reservationInterval, reservationsArr[i].reservationInterval)) {
                    resConflict = true;
                }
            }
            else {
                if (res.vehicle == reservationsArr[i].vehicle) {
                    if (areIntervalsOverlapping(res.reservationInterval, reservationsArr[i].reservationInterval)) {
                        resConflict = true;
                    }
                }
            }
        }
        if (!resConflict) {
            reservationsArr.push(res);
            use.reservations.push(res.UID);
            usersFinalFile.splice(record, 1, use);
            lastUID = UID;
            if ((0, date_fns_1.isWithinInterval)(new Date(), res.reservationInterval)) {
                const newOccupiedBay = (0, setBayOccupiedStatus_1.setBayOccupiedStatus)(res, lastoccUID);
                lastoccUID = lastoccUID + 1;
                occupiedArr.push(newOccupiedBay);
            }
            else if ((0, date_fns_1.isAfter)(toDate(res.reservationInterval.start), new Date())) {
                const newReservedBay = (0, setBayReservedStatus_1.setBayReservedStatus)(res, lastresUID);
                lastresUID = lastresUID + 1;
                reservedArr.push(newReservedBay);
            }
        }
    }
    //console.log(reservationsArr); //write to file here
    const finalReservationsArr = JSON.stringify(reservationsArr, null, 2);
    fs.writeFileSync('../cars-so-many-cars/src/Arrays/reservations.json', finalReservationsArr, (err) => {
        if (err)
            throw err;
    });
    //console.log(occupiedArr);
    const finalOccupiedArr = JSON.stringify(occupiedArr, null, 2);
    fs.writeFileSync('../cars-so-many-cars/src/Arrays/occupiedBays.json', finalOccupiedArr, (err) => {
        if (err)
            throw err;
    });
    //console.log(reservedArr);
    const finalReservedArr = JSON.stringify(reservedArr, null, 2);
    fs.writeFileSync('../cars-so-many-cars/src/Arrays/reservedBays.json', finalReservedArr, (err) => {
        if (err)
            throw err;
    });
    const finalUserList = JSON.stringify(usersFinalFile, null, 2);
    fs.writeFileSync('../cars-so-many-cars/src/Arrays/userList.json', finalUserList, (err) => {
        if (err)
            throw err;
    });
    //assign UIDs into UID files
    const finalUID = '{"lastID":' + lastUID + '}';
    fs.writeFileSync('../cars-so-many-cars/src/Arrays/reservationUID.json', finalUID, (err) => {
        if (err)
            throw err;
    });
    const finalresUID = '{"lastID":' + lastresUID + '}';
    fs.writeFileSync('../cars-so-many-cars/src/Arrays/reservedUID.json', finalresUID, (err) => {
        if (err)
            throw err;
    });
    const finaloccUID = '{"lastID":' + lastoccUID + '}';
    fs.writeFileSync('../cars-so-many-cars/src/Arrays/occupiedUID.json', finaloccUID, (err) => {
        if (err)
            throw err;
    });
}
exports.createMassReservations = createMassReservations;

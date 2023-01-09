"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMassReservations = void 0;
const date_fns_1 = require("date-fns");
const reservation_1 = require("../Classes/reservation");
const user_1 = require("../Classes/user");
const setBayOccupiedStatus_1 = require("../setBayOccupiedStatus");
const setBayReservedStatus_1 = require("../setBayReservedStatus");
function createMassReservations(numToCreate) {
    const fs = require('fs');
    const add = require('date-fns/add');
    const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');
    const toDate = require('date-fns/toDate');
    let uidRawFile = fs.readFileSync('../cars-so-many-cars/src/Arrays/reservationUID.json');
    const uidFinalFile = JSON.parse(uidRawFile);
    let reservedUIDRawFile = fs.readFileSync('../cars-so-many-cars/src/Arrays/reservedUID.json');
    const reservedUIDFinalFile = JSON.parse(reservedUIDRawFile);
    let occupiedUIDRawFile = fs.readFileSync('../cars-so-many-cars/src/Arrays/occupiedUID.json');
    const occupiedUIDFinalFile = JSON.parse(occupiedUIDRawFile);
    let regRawFile = fs.readFileSync('regs.json');
    const regFinalFile = JSON.parse(regRawFile);
    let bayRawFile = fs.readFileSync('../cars-so-many-cars/src/Arrays/BristolBays.json');
    const bayFinalFile = JSON.parse(bayRawFile);
    let usersRawFile = fs.readFileSync('../cars-so-many-cars/src/Arrays/userList.json');
    const usersFinalFile = JSON.parse(usersRawFile);
    let lastUID = uidFinalFile.lastID;
    let lastresUID = reservedUIDFinalFile.lastID;
    let lastoccUID = occupiedUIDFinalFile.lastID;
    let reservationsArr = [];
    let occupiedArr = [];
    let reservedArr = [];
    for (let i = 0; i < numToCreate; i++) {
        let UID = lastUID + 1;
        let a = Math.floor(Math.random() * 100);
        let bayUID = bayFinalFile[a]._UID;
        a = Math.floor(Math.random() * usersFinalFile.length);
        let UUID = a - 1;
        let use = new user_1.user(usersFinalFile[UUID]._UID, usersFinalFile[UUID]._firstName, usersFinalFile[UUID]._lastName, usersFinalFile[UUID]._email, usersFinalFile[UUID]._phone, usersFinalFile[UUID]._address, usersFinalFile[UUID]._isActive, usersFinalFile[UUID]._userCreated, usersFinalFile[UUID]._userUpdated, usersFinalFile[UUID]._paymentPlan, usersFinalFile[UUID]._vehicles, usersFinalFile[UUID]._password, usersFinalFile[UUID]._reservations);
        //a = Math.floor(Math.random()*regFinalFile.length);
        //let vehicle: string = regFinalFile[a];
        let vehicle;
        console.log(use);
        if (use.vehicles.length > 1) {
            a = Math.floor(Math.random() * 2);
            vehicle = use.vehicles[a];
        }
        else {
            vehicle = use.vehicles[0];
        }
        a = Math.floor(Math.random() * 60);
        let b = Math.floor(Math.random() * 13);
        let c = Math.floor(Math.random() * (13 - b + 1) + b + 1);
        let resInt = { start: add(new Date(2023, 0, 6, 6), { days: a, hours: b }), end: add(new Date(2023, 0, 6, 6), { days: a, hours: c }) }; //need to add maxes / mins}
        let resCreate = new Date();
        let resUpdate = new Date();
        //let discount: number = (Math.floor(Math.random()*(10-1)+1)*10);
        let discount;
        switch (use.paymentPlan) {
            case "Monthly":
                discount = 20;
                break;
            case "Annual":
                discount = 40;
                break;
            default:
                discount = 0;
        }
        ;
        let price = (5 - (5 * discount) / 100);
        let res = new reservation_1.reservation(UID, bayUID, UUID, vehicle, resInt, resCreate, resUpdate, discount, price);
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
            lastUID = UID;
            if ((0, date_fns_1.isWithinInterval)(new Date(), res.reservationInterval)) {
                let newOccupiedBay = (0, setBayOccupiedStatus_1.setBayOccupiedStatus)(res, lastoccUID);
                lastoccUID = lastoccUID + 1;
                occupiedArr.push(newOccupiedBay);
            }
            else if ((0, date_fns_1.isAfter)(toDate(res.reservationInterval.start), new Date())) {
                let newReservedBay = (0, setBayReservedStatus_1.setBayReservedStatus)(res, lastresUID);
                lastresUID = lastresUID + 1;
                reservedArr.push(newReservedBay);
            }
        }
    }
    console.log(reservationsArr); //write to file here
    console.log(occupiedArr);
    console.log(reservedArr);
    //assign UIDs into UID files
    let finalUID = "{\"lastID\":" + lastUID + "}";
    fs.writeFile('../cars-so-many-cars/src/Arrays/reservationUID.json', finalUID, (err) => {
        if (err)
            throw err;
    });
    let finalresUID = "{\"lastID\":" + lastresUID + "}";
    fs.writeFile('../cars-so-many-cars/src/Arrays/reservationUID.json', finalresUID, (err) => {
        if (err)
            throw err;
    });
    let finaloccUID = "{\"lastID\":" + lastoccUID + "}";
    fs.writeFile('../cars-so-many-cars/src/Arrays/reservationUID.json', finaloccUID, (err) => {
        if (err)
            throw err;
    });
    //write occupied bays to file
}
exports.createMassReservations = createMassReservations;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMassReservations = void 0;
const reservation_1 = require("../Classes/reservation");
function createMassReservations(numToCreate) {
    const fs = require('fs');
    const add = require('date-fns/add');
    const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');
    let uidRawFile = fs.readFileSync('../cars-so-many-cars/src/Arrays/reservationUID.json');
    const uidFinalFile = JSON.parse(uidRawFile);
    let regRawFile = fs.readFileSync('regs.json');
    const regFinalFile = JSON.parse(regRawFile);
    let bayRawFile = fs.readFileSync('../cars-so-many-cars/src/Arrays/BristolBays.json');
    const bayFinalFile = JSON.parse(bayRawFile);
    let lastUID = uidFinalFile.lastID;
    let reservationsArr = [];
    let userUID = 0; //replace this to pull from db
    for (let i = 0; i < numToCreate; i++) {
        let UID = lastUID + 1;
        let a = Math.floor(Math.random() * 100);
        let bayUID = bayFinalFile[a]._UID;
        let UUID = userUID + 1;
        userUID = UUID;
        a = Math.floor(Math.random() * regFinalFile.length);
        let vehicle = regFinalFile[a];
        a = Math.floor(Math.random() * 60);
        let b = Math.floor(Math.random() * 13);
        let c = Math.floor(Math.random() * (13 - b + 1) + b + 1);
        let resInt = { start: add(new Date(2023, 0, 6, 6), { days: a, hours: b }), end: add(new Date(2023, 0, 6, 6), { days: a, hours: c }) }; //need to add maxes / mins}
        //a = Math.floor(Math.floor(Math.random()*12));
        //let resEnd: Date = add(resStart,{hours: a}); //add maxes / mins
        let resCreate = new Date();
        let resUpdate = new Date();
        let discount = (Math.floor(Math.random() * (10 - 1) + 1) * 10);
        let price = (5 - (5 * discount) / 100);
        let res = new reservation_1.reservation(UID, bayUID, UUID, vehicle, resInt, 
        //resEnd,
        resCreate, resUpdate, discount, price);
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
        }
    }
    console.log(reservationsArr);
}
exports.createMassReservations = createMassReservations;

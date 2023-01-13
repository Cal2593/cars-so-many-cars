"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUsers = void 0;
const usersNames_1 = require("../Arrays/usersNames");
const user_1 = require("../Classes/user");
function createUsers() {
    const fs = require('fs');
    const uidRawFile = fs.readFileSync('../cars-so-many-cars/src/Arrays/usersUID.json');
    const uidFinalFile = JSON.parse(uidRawFile);
    const regRawFile = fs.readFileSync('regs.json');
    const regFinalFile = JSON.parse(regRawFile);
    let lastUID = uidFinalFile.lastID;
    const numToCreate = usersNames_1.usersNames.length;
    const usedRegs = [];
    let nextReg = 0;
    const usersArr = [];
    for (let i = 0; i < numToCreate; i++) {
        const UID = lastUID + 1;
        const firstName = usersNames_1.usersNames[i].substring(0, usersNames_1.usersNames[i].indexOf(' '));
        const lastName = usersNames_1.usersNames[i].substring(usersNames_1.usersNames[i].indexOf(' ') + 1);
        const email = firstName.toLowerCase() + lastName.toLowerCase() + '@outlook.com';
        const phone = '07757699519';
        let a = Math.floor(Math.random() * 100);
        const address = a + ' Dickinsons Fields, Bedminster, Bristol, BS3 5BG';
        const isActive = true;
        const userCreated = new Date();
        const userUpdated = new Date();
        a = Math.floor(Math.random() * 3);
        let paymentPlan;
        switch (a) {
            case 0:
                paymentPlan = 'No Plan';
                break;
            case 1:
                paymentPlan = 'Monthly';
                break;
            case 2:
                paymentPlan = 'Annual';
                break;
            default:
                paymentPlan = 'No Plan';
        }
        const vehicles = [];
        if (regFinalFile.length - usedRegs.length > numToCreate - i) {
            vehicles.push(regFinalFile[nextReg], regFinalFile[nextReg + 1]);
            usedRegs.push(regFinalFile[nextReg], regFinalFile[nextReg + 1]);
            nextReg = nextReg + 2;
        }
        else {
            vehicles.push(regFinalFile[nextReg]);
            usedRegs.push(regFinalFile[nextReg]);
            nextReg = nextReg + 1;
        }
        const password = 'Password123';
        const reservations = [];
        const person = new user_1.user(UID, firstName, lastName, email, phone, address, isActive, userCreated, userUpdated, paymentPlan, vehicles, password, reservations);
        usersArr.push(person);
        lastUID = UID;
    }
    const finalUsersArr = JSON.stringify(usersArr, null, 2);
    fs.writeFile('../cars-so-many-cars/src/Arrays/userList.json', finalUsersArr, (err) => {
        if (err)
            throw err;
    });
    const finalUID = '{"lastID":' + lastUID + '}';
    fs.writeFile('../cars-so-many-cars/src/Arrays/usersUID.json', finalUID, (err) => {
        if (err)
            throw err;
    });
}
exports.createUsers = createUsers;

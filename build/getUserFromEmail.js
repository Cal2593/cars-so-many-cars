"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserFromEmail = void 0;
const user_1 = require("./Classes/user");
const createUser_1 = require("./createUser");
function getUserFromEmail(email, vehicle) {
    const fs = require('fs');
    const usersRaw = fs.readFileSync('../cars-so-many-cars/src/Arrays/userList.json');
    const usersFinal = JSON.parse(usersRaw);
    let found = false;
    for (let i = 0; i < usersFinal.length && found == false; i++) {
        if (usersFinal[i]._email == email) {
            found = true;
            const use = new user_1.user(usersFinal[i]._UID, usersFinal[i]._firstName, usersFinal[i]._lastName, usersFinal[i]._email, usersFinal[i]._phone, usersFinal[i]._address, usersFinal[i]._isActive, usersFinal[i]._userCreated, usersFinal[i]._userUpdated, usersFinal[i]._paymentPlan, usersFinal[i]._vehicles, usersFinal[i]._password, usersFinal[i]._reservations);
            return use.UID;
        }
    }
    if (found == false) {
        return (0, createUser_1.createUser)(email, vehicle);
    }
    ;
}
exports.getUserFromEmail = getUserFromEmail;
;

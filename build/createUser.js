"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const user_1 = require("./Classes/user");
function createUser(email, vehicle) {
    const fs = require('fs');
    const bcrypt = require('bcrypt');
    const usersRaw = fs.readFileSync('../cars-so-many-cars/src/Arrays/userList.json');
    const usersFinal = JSON.parse(usersRaw);
    const usersUID = fs.readFileSync('../cars-so-many-cars/src/Arrays/usersUID.json');
    const usersUIDFinal = JSON.parse(usersUID);
    const firstName = "Frank"; //Actual user response
    const lastName = "Jefferson"; //Actual user response
    const phone = "07756951869"; //Actual user response
    const address = "9 Seavale Road, Clevedon, North Somerset, BS21 7QB"; //Actual user response
    const paymentPlan = "No plan"; //Actual user response
    const vehicleReg = vehicle;
    const password = "Password123"; //Actual user response
    const UID = usersUIDFinal.lastID + 1;
    const isActive = true;
    const userCreated = new Date();
    const userUpdated = new Date();
    const vehicles = [vehicleReg];
    const reservations = [];
    let use = new user_1.user(UID, firstName, lastName, email, phone, address, isActive, userCreated, userUpdated, paymentPlan, vehicles, password, reservations);
    usersFinal.push(use);
    const finalUID = '{"lastID":' + UID + '}';
    fs.writeFileSync('../cars-so-many-cars/src/Arrays/usersUID.json', finalUID, (err) => {
        if (err)
            throw err;
    });
    const finalUsersFile = JSON.stringify(usersFinal, null, 2);
    fs.writeFileSync('../cars-so-many-cars/src/Arrays/userList.json', finalUsersFile, (err) => {
        if (err)
            throw err;
    });
    return use.UID;
}
exports.createUser = createUser;

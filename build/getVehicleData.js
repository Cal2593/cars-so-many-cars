"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVehicleData = void 0;
const fs = require('fs');
function getVehicleData() {
    const rawUserData = fs.readFileSync('userReg.json');
    const firstparse = JSON.parse(rawUserData);
    const finalUserData = JSON.parse(firstparse);
    let electricFuel;
    if (finalUserData.fuelType == "ELECTRICITY") {
        electricFuel = true;
    }
    else {
        electricFuel = false;
    }
    let vehicleType;
    if (finalUserData.wheelplan == "2 AXLE RIGID BODY") {
        vehicleType = "Car";
    }
    else if (finalUserData.wheelplan == "2 WHEEL") {
        vehicleType = "Motorbike";
    }
    else if (finalUserData.wheelplan == "3 AXLE + 3 AXLE ARTIC") {
        vehicleType = "Lorry";
    }
    else {
        vehicleType = "Motorhome/Caravan";
    }
    const vehicleColour = finalUserData.colour;
    const vehicleMake = finalUserData.make;
    const vehicleData = [vehicleMake, vehicleColour, vehicleType, electricFuel];
    return vehicleData;
}
exports.getVehicleData = getVehicleData;

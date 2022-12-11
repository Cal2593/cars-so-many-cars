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
    switch (finalUserData.wheelplan) {
        case "2 AXLE RIGID BODY":
            vehicleType = "Car";
            break;
        case "3 WHEEL":
            vehicleType = "Tricycle";
            break;
        case "2 WHEEL":
            vehicleType = "Motorbike";
            break;
        case "3 AXLE RIGID BODY":
            vehicleType = "Motorhome/Caravan";
            break;
        case "MULTI-AXLE RIGID":
        case "2 AXLE & ARTIC":
        case "3 AXLE & ARTIC":
        case "MULTI-AXLE & ARTIC":
        case "CRAWLER NON-STANDARD":
            vehicleType = "Lorry";
            break;
        default:
            vehicleType = "Unknown";
            break;
    }
    const vehicleColour = finalUserData.colour;
    const vehicleMake = finalUserData.make;
    const vehicleData = [vehicleMake, vehicleColour, vehicleType, electricFuel];
    return vehicleData;
}
exports.getVehicleData = getVehicleData;

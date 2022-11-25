"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientVeh = void 0;
const ParkingSpotClass_1 = require("./ParkingSpotClass");
const vehicleClass_1 = require("./vehicleClass");
const app_1 = require("./app");
const arrays_1 = require("./arrays");
const findSpotInfo_1 = require("./findSpotInfo");
console.log((0, arrays_1.CreateArrays)());
const [spots, reserve, occupy, occupyingCar, owns] = (0, arrays_1.CreateArrays)();
const specSpot = "A9";
const [resStatus, occStatus, occCar, owner] = (0, findSpotInfo_1.findSpotInfo)(specSpot, spots, reserve, occupy, occupyingCar, owns);
exports.clientVeh = new vehicleClass_1.vehicle("Car", occCar, "F6", "WV60 SXX", owner, true); //type,make,model,reg,owner,electric
const pSpot = new ParkingSpotClass_1.ParkingSpot(specSpot, resStatus, occStatus, exports.clientVeh, true);
const [own, make] = (0, app_1.carInSpot)(pSpot);
if (pSpot.occupiedStatus == true) {
    console.log("Space " + pSpot.ID + " is currently occupied by " + own + "'s " + make);
}
else {
    console.log("Space " + pSpot.ID + " is currently vacant");
}

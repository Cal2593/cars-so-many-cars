"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientCar = void 0;
const ParkingSpotClass_1 = require("./ParkingSpotClass");
const CarClass_1 = require("./CarClass");
const app_1 = require("./app");
const arrays_1 = require("./arrays");
(0, arrays_1.CreateArrays)();
console.log((0, arrays_1.CreateArrays)());
exports.clientCar = new CarClass_1.Car("Renault", "F6", "WV60 SXX", "Callum Davidson", true);
const pSpot = new ParkingSpotClass_1.ParkingSpot("b1", true, true, exports.clientCar, true);
const [own, make] = (0, app_1.carInSpot)(pSpot);
if (pSpot.occupiedStatus == true) {
    console.log("Space " + pSpot.ID + " is currently occupied by " + own + "'s " + make);
}
else {
    console.log("Space " + pSpot.ID + " is currently vacant");
}

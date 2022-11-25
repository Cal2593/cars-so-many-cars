"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientVeh = void 0;
const ParkingSpotClass_1 = require("./Classes/ParkingSpotClass");
const app_1 = require("./app");
const arrays_1 = require("./arrays");
const findSpotInfo_1 = require("./findSpotInfo");
const Car_1 = require("./Classes/Car");
const [spots, reserve, occupy, occupyingCar, owns] = (0, arrays_1.CreateArrays)();
const specSpot = 'A9';
const [resStatus, occStatus, occCar, owner] = (0, findSpotInfo_1.findSpotInfo)(specSpot, spots, reserve, occupy, occupyingCar, owns);
exports.clientVeh = new Car_1.Car(
//VehicleType.Car,
occCar, 'F6', 'WV60 SXX', owner, true, "red", 2000, 2000, 2000); //type,make,model,reg,owner,electric
const pSpot = new ParkingSpotClass_1.ParkingSpot(specSpot, resStatus, occStatus, exports.clientVeh, true);
const [own, make] = (0, app_1.carInSpot)(pSpot);
if (pSpot.occupiedStatus == true) {
    console.log('Space ' + pSpot.ID + ' is currently occupied by ' + own + "'s " + make);
}
else {
    console.log('Space ' + pSpot.ID + ' is currently vacant');
}
// Feed in car types and check that the inheritance between Vehicle and Car works
// Move Create Arrays out of start up
// Get create arrays to write to memory
//  -
// Create other vehicle classes
// Changing parking spot to interface
// Create other parking spot classes

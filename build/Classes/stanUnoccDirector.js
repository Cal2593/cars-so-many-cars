"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parkingSpotType_1 = require("../enums/parkingSpotType");
const parseArrays_1 = require("../parseArrays");
const SpotBuilder_1 = require("./SpotBuilder");
class StandardUnoccupiedSpotDirector {
    static construct() {
        const data = (0, parseArrays_1.parseArrays)();
        console.log(data);
        console.log("parsing complete");
        let found = 0;
        for (let i = 0; found == 0; i++) {
            if (data[i].occupied == false) {
                console.log(data[i].id);
                var spotFound = data[i].id;
                found = 1;
            }
        }
        return new SpotBuilder_1.SpotBuilder()
            .setID(spotFound)
            .setSpotType(parkingSpotType_1.ParkingSpotType.Standard)
            .setReservedStatus(false)
            .setOccupiedStatus(false)
            .setLocation("Bristol")
            .setBasePrice(2)
            .getResult();
    }
}
exports.default = StandardUnoccupiedSpotDirector;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parseArrays_1 = require("../parseArrays");
const SpotBuilder_1 = require("./SpotBuilder");
class StandardUnoccupiedSpotDirector {
    static construct() {
        const data = (0, parseArrays_1.parseArrays)();
        console.log("parsing complete");
        let found = 0;
        for (let i = 0; found == 0; i++) {
            if (data[i].occupied == false && data[i].reservation == false) {
                var spotFound = data[i].id;
                found = 1;
            }
        }
        return new SpotBuilder_1.SpotBuilder()
            .setID(spotFound)
            .setSpotType("Standard") //error on enum is either in the builder or the spot
            .setReservedStatus(false)
            .setOccupiedStatus(false)
            .setLocation("Bristol")
            .setBasePrice(2)
            .getResult();
    }
}
exports.default = StandardUnoccupiedSpotDirector;
/*To do
    Create other directors for the list in the enum + valet
    Build out the array creation to have the other relevant details
    Get everything pulling in via various directors and printing out
    Set it up so that this info pulls in and then I can set a reservation into a spot
*/ 

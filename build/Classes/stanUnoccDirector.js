"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = require("process");
const parseArrays_1 = require("../parseArrays");
const SpotBuilder_1 = require("./SpotBuilder");
class StandardUnoccupiedSpotDirector {
    static construct() {
        var _a, _b;
        const data = (0, parseArrays_1.parseArrays)();
        let found = 0;
        try {
            for (let i = 0; found == 0; i++) {
                if (!((_a = data[i]) === null || _a === void 0 ? void 0 : _a.occupied) &&
                    !((_b = data[i]) === null || _b === void 0 ? void 0 : _b.reservation) &&
                    data[i].spotType == 'Standard') {
                    var spotFound = data[i].id;
                    var spotLoc = data[i].location;
                    var spotCov = data[i].covering;
                    found = 1;
                }
            }
        }
        catch (error) {
            console.log('No spot found');
            process_1.exit;
        }
        return new SpotBuilder_1.SpotBuilder(spotCov)
            .setID(spotFound)
            .setSpotType('Standard') //error on enum is either in the builder or the spot
            .setReservedStatus(false)
            .setOccupiedStatus(false)
            .setLocation(spotLoc)
            .setCoveringStatus(spotCov)
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

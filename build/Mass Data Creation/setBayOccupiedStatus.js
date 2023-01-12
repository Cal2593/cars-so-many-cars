"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setBayOccupiedStatus = void 0;
const occupiedParkingBay_1 = require("../Classes/occupiedParkingBay");
const toDate = require('date-fns/toDate');
function setBayOccupiedStatus(res, lastuid) {
    let UID = lastuid + 1;
    let bayUID = res.bayUID;
    let resUID = res.UID;
    let occEnd = toDate(res.reservationInterval.end);
    let occ = new occupiedParkingBay_1.occupiedParkingBay(UID, bayUID, resUID, occEnd);
    return occ;
}
exports.setBayOccupiedStatus = setBayOccupiedStatus;

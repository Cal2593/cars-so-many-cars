"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setBayOccupiedStatus = void 0;
const occupiedParkingBay_1 = require("../Classes/occupiedParkingBay");
const toDate = require('date-fns/toDate');
function setBayOccupiedStatus(res, lastuid) {
    const UID = lastuid + 1;
    const bayUID = res.bayUID;
    const resUID = res.UID;
    const occEnd = toDate(res.reservationInterval.end);
    const occ = new occupiedParkingBay_1.occupiedParkingBay(UID, bayUID, resUID, occEnd);
    return occ;
}
exports.setBayOccupiedStatus = setBayOccupiedStatus;

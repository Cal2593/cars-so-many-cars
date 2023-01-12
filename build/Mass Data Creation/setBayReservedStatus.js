"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setBayReservedStatus = void 0;
const reservedParkingBay_1 = require("../Classes/reservedParkingBay");
function setBayReservedStatus(res, lastuid) {
    let UID = lastuid + 1;
    let bayUID = res.bayUID;
    let resUID = res.UID;
    let resInt = res.reservationInterval;
    let resBay = new reservedParkingBay_1.reservedParkingBay(UID, bayUID, resUID, resInt);
    return resBay;
}
exports.setBayReservedStatus = setBayReservedStatus;

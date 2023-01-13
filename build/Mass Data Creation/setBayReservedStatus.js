"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setBayReservedStatus = void 0;
const reservedParkingBay_1 = require("../Classes/reservedParkingBay");
function setBayReservedStatus(res, lastuid) {
    const UID = lastuid + 1;
    const bayUID = res.bayUID;
    const resUID = res.UID;
    const resInt = res.reservationInterval;
    const resBay = new reservedParkingBay_1.reservedParkingBay(UID, bayUID, resUID, resInt);
    return resBay;
}
exports.setBayReservedStatus = setBayReservedStatus;

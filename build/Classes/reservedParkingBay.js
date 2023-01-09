"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reservedParkingBay = void 0;
class reservedParkingBay {
    constructor(UID, bayUID, reservationUID, reservedInterval) {
        this._UID = UID;
        this._bayUID = bayUID;
        this._reservationUID = reservationUID;
        this._reservedInterval = reservedInterval;
    }
    get UID() {
        return this._UID;
    }
    set UID(value) {
        this._UID = value;
    }
    get bayUID() {
        return this._bayUID;
    }
    set bayUID(value) {
        this._bayUID = value;
    }
    get reservationUID() {
        return this._reservationUID;
    }
    set reservationUID(value) {
        this._reservationUID = value;
    }
    get reservedInterval() {
        return this._reservedInterval;
    }
    set reservedInterval(value) {
        this._reservedInterval = value;
    }
}
exports.reservedParkingBay = reservedParkingBay;

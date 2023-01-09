"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.occupiedParkingBay = void 0;
class occupiedParkingBay {
    constructor(UID, bayUID, reservationUID, occupationEndDateTime) {
        this._UID = UID;
        this._bayUID = bayUID;
        this._reservationUID = reservationUID;
        this._occupationEndDateTime = occupationEndDateTime;
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
    get occupationEndDateTime() {
        return this._occupationEndDateTime;
    }
    set occupationEndDateTime(value) {
        this._occupationEndDateTime = value;
    }
}
exports.occupiedParkingBay = occupiedParkingBay;

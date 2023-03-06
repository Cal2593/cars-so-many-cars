"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodedReservation = void 0;
class decodedReservation {
    constructor(bayID, vehicle, reservationDate, reservationStartTime, reservationEndTime, reservationLocation, reservationPrice) {
        this._bayID = bayID;
        this._vehicle = vehicle;
        this._reservationDate = reservationDate;
        this._reservationStartTime = reservationStartTime;
        this._reservationEndTime = reservationEndTime;
        this._reservationLocation = reservationLocation;
        this._reservationPrice = reservationPrice;
    }
    get bayID() {
        return this._bayID;
    }
    set bayID(value) {
        this._bayID = value;
    }
    get vehicle() {
        return this._vehicle;
    }
    set vehicle(value) {
        this._vehicle = value;
    }
    get reservationDate() {
        return this._reservationDate;
    }
    set reservationDate(value) {
        this._reservationDate = value;
    }
    get reservationStartTime() {
        return this._reservationStartTime;
    }
    set reservationStartTime(value) {
        this._reservationStartTime = value;
    }
    get reservationEndTime() {
        return this._reservationEndTime;
    }
    set reservationEndTime(value) {
        this._reservationEndTime = value;
    }
    get reservationLocation() {
        return this._reservationLocation;
    }
    set reservationLocation(value) {
        this._reservationLocation = value;
    }
    get reservationPrice() {
        return this._reservationPrice;
    }
    set reservationPrice(value) {
        this._reservationPrice = value;
    }
}
exports.decodedReservation = decodedReservation;

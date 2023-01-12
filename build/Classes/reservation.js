"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reservation = void 0;
class reservation {
    constructor(UID, bayUID, userUID, vehicle, resInterval, resCreate, resUpdate, discount, price) {
        this._UID = UID;
        this._bayUID = bayUID;
        this._userUID = userUID;
        this._vehicle = vehicle;
        this._reservationInterval = resInterval;
        this._reservationCreationTS = resCreate;
        this._reservationUpdateTS = resUpdate;
        this._discountPercent = discount;
        this._pricePaid = price;
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
    get userUID() {
        return this._userUID;
    }
    set userUID(value) {
        this._userUID = value;
    }
    get vehicle() {
        return this._vehicle;
    }
    set vehicle(value) {
        this._vehicle = value;
    }
    get reservationInterval() {
        return this._reservationInterval;
    }
    set reservationInterval(value) {
        this._reservationInterval = value;
    }
    get reservationCreationTS() {
        return this._reservationCreationTS;
    }
    set reservationCreationTS(value) {
        this._reservationCreationTS = value;
    }
    get reservationUpdateTS() {
        return this._reservationUpdateTS;
    }
    set reservationUpdateTS(value) {
        this._reservationUpdateTS = value;
    }
    get discountPercent() {
        return this._discountPercent;
    }
    set discountPercent(value) {
        this._discountPercent = value;
    }
    get pricePaid() {
        return this._pricePaid;
    }
    set pricePaid(value) {
        this._pricePaid = value;
    }
}
exports.reservation = reservation;

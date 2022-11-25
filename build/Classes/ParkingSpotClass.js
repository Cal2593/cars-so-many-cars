"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkingSpot = void 0;
const __1 = require("..");
class ParkingSpot {
    //covered spot?
    //which car park?
    //vehicle spot type
    //-Disability accessible
    //-Extra wide
    //-Standard
    constructor(id, resStat, occStat, car, elecChar) {
        this._ID = id;
        this._reservationStatus = resStat;
        this._occupiedStatus = occStat;
        this._car = __1.clientVeh;
        this._electricCharging = elecChar;
    }
    get ID() {
        return this._ID;
    }
    set ID(value) {
        this._ID = value;
    }
    get reservationStatus() {
        return this._reservationStatus;
    }
    set reservationStatus(value) {
        this._reservationStatus = value;
    }
    get occupiedStatus() {
        return this._occupiedStatus;
    }
    set occupiedStatus(value) {
        this._occupiedStatus = value;
    }
    get car() {
        return this._car;
    }
    set car(value) {
        this._car = value;
    }
    get electricCharging() {
        return this._electricCharging;
    }
    set electricCharging(value) {
        this._electricCharging = value;
    }
}
exports.ParkingSpot = ParkingSpot;

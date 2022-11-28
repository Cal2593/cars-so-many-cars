"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.standardParkingSpot = void 0;
const parkingSpotType_1 = require("../enums/parkingSpotType");
class standardParkingSpot {
    constructor(id, resStat, occStat, vehi, //do I need this?
    elecChar, covered, valet, location, roofclearance, spotwidth, spotdepth, baseprice) {
        this._spotType = parkingSpotType_1.ParkingSpotType.Standard;
        this._ID = id;
        this._reservationStatus = resStat;
        this._occupiedStatus = occStat;
        //this._vehi = clientVeh;
        this._vehi = vehi;
        this._electricCharging = elecChar;
        this._covered = covered;
        this._valet = valet;
        this._location = location;
        this._spotRoofClearance = roofclearance;
        this._spotWidth = spotwidth;
        this._spotDepth = spotdepth;
        this._basePrice = baseprice;
    }
    get ID() {
        return this._ID;
    }
    set ID(value) {
        this._ID = value;
    }
    get spotType() {
        return this._spotType;
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
    get vehicle() {
        return this._vehi;
    }
    set vehicle(value) {
        this._vehi = value;
    }
    get electricCharging() {
        return this._electricCharging;
    }
    set electricCharging(value) {
        this._electricCharging = value;
    }
    get covered() {
        return this._covered;
    }
    set covered(value) {
        this._covered = value;
    }
    get valet() {
        return this._valet;
    }
    set valet(value) {
        this._valet = value;
    }
    get location() {
        return this._location;
    }
    set location(value) {
        this._location = value;
    }
    get spotRoofClearance() {
        return this._spotRoofClearance;
    }
    set spotRoofClearance(value) {
        this._spotRoofClearance = value;
    }
    get spotWidth() {
        return this._spotWidth;
    }
    set spotWidth(value) {
        this._spotWidth = value;
    }
    get spotDepth() {
        return this._spotDepth;
    }
    set spotDepth(value) {
        this._spotDepth = value;
    }
    get basePrice() {
        return this._basePrice;
    }
    set basePrice(value) {
        this._basePrice = value;
    }
}
exports.standardParkingSpot = standardParkingSpot;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkingSpot = void 0;
class ParkingSpot {
    constructor(id, resStat, occStat, car, elecChar) {
        this.ID = id;
        this.reservationStatus = resStat;
        this.occupiedStatus = occStat;
        this.car = car;
        this.electricCharging = elecChar;
    }
    disp() {
        console.log('function displays this spot is: ' + this.ID);
    }
}
exports.ParkingSpot = ParkingSpot;

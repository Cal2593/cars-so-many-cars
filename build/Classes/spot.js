"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parkingSpotType_1 = require("../enums/parkingSpotType");
class Spot {
    constructor() {
        this.ID = "";
        this.spotType = parkingSpotType_1.ParkingSpotType;
        this.reserved = false;
        this.occupied = false;
        this.location = "";
        this.basePrice = 2;
    }
    construction() {
        return 'Retrieved ${this.spotType} spot ${this.ID}';
    }
}
exports.default = Spot;

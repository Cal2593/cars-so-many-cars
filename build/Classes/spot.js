"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Spot {
    constructor() {
        this.ID = "";
        this.spotType = "";
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

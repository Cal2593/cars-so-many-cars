"use strict";
//Model Object - This object simply contains get/sets to store data received from SpotDAOClass
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpotBuilder = void 0;
const parkingSpotType_1 = require("../enums/parkingSpotType");
const spot_1 = __importDefault(require("./spot"));
class SpotBuilder {
    constructor() {
        this.spot = new spot_1.default();
    }
    setID(ID) {
        this.spot.ID = ID;
        return this;
    }
    setSpotType(spotType) {
        this.spot.spotType = parkingSpotType_1.ParkingSpotType;
        return this;
    }
    setReservedStatus(reserved) {
        this.spot.reserved = reserved;
        return this;
    }
    setOccupiedStatus(occupied) {
        this.spot.occupied = occupied;
        return this;
    }
    setLocation(location) {
        this.spot.location = location;
        return this;
    }
    setBasePrice(basePrice) {
        this.spot.basePrice = basePrice;
        return this;
    }
    getResult() {
        return this.spot;
    }
}
exports.SpotBuilder = SpotBuilder;

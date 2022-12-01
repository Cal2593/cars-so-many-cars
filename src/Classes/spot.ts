import { ParkingSpotType } from "../enums/parkingSpotType";

export default class Spot {
    ID = "";
    spotType = ParkingSpotType;
    reserved = false;
    occupied = false;
    location = "";
    basePrice = 2;

    construction(): string {
        return 'Retrieved ${this.spotType} spot ${this.ID}';
    }
}
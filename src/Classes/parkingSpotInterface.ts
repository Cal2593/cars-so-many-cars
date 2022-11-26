import { vehicle } from './vehicleInterface';
import { ParkingSpotType } from '../enums/parkingSpotType';

export interface parkingSpot {
    get ID(): string;
    set ID(value: string);
    get spotType(): ParkingSpotType;
    set spotType(value: ParkingSpotType);
    get reservationStatus(): boolean;
    set reservationStatus(value: boolean);
    get occupiedStatus(): boolean; 
    set occupiedStatus(value: boolean);
    get vehicle(): vehicle;
    set vehicle(value: vehicle);
    get electricCharging(): boolean;
    set electricCharging(value: boolean);
    get covered(): boolean; //in the future - could check weather and when it's sunny recommend covered spots
    set covered(value: boolean); 
    get valet(): boolean;
    set valet(value: boolean);
    get location(): string;
    set location(value: string);
    get basePrice(): number;
    set basePrice(value: number);
}
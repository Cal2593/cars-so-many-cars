import { Car } from "./CarClass";
import { clientCar } from ".";

export class ParkingSpot {
  ID: string;
  reservationStatus: boolean;
  occupiedStatus: boolean;
  car: Car;
  electricCharging: boolean;

  constructor(
    id: string,
    resStat: boolean,
    occStat: boolean,
    car: Car,
    elecChar: boolean
  ) {
    this.ID = id;
    this.reservationStatus = resStat;
    this.occupiedStatus = occStat;
    this.car = clientCar;
    this.electricCharging = elecChar;
  }

  disp(): void {
    console.log('function displays this spot is: ' + this.ID);
  }
}



export class ParkingSpot {
  ID: string;
  reservationStatus: boolean;
  occupiedStatus: boolean;
  car: string;
  electricCharging: boolean;

  constructor(
    id: string,
    resStat: boolean,
    occStat: boolean,
    car: string,
    elecChar: boolean
  ) {
    this.ID = id;
    this.reservationStatus = resStat;
    this.occupiedStatus = occStat;
    this.car = car;
    this.electricCharging = elecChar;
  }

  disp(): void {
    console.log('function displays this spot is: ' + this.ID);
  }
}



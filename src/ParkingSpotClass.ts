import { vehicle } from "./vehicleClass";
import { clientVeh } from ".";

export class ParkingSpot {
  private _ID: string;
  private _reservationStatus: boolean;
  private _occupiedStatus: boolean; 
  private _car: vehicle;
  private _electricCharging: boolean;
    //covered spot?
    //which car park?
    //vehicle spot type

  constructor(
    id: string,
    resStat: boolean,
    occStat: boolean,
    car: vehicle,
    elecChar: boolean
  ) {
    this._ID = id;
    this._reservationStatus = resStat;
    this._occupiedStatus = occStat;
    this._car = clientVeh;
    this._electricCharging = elecChar;
  }
    public get ID(): string {
        return this._ID;
    }
    public set ID(value: string) {
        this._ID = value;
    }
    public get reservationStatus(): boolean {
        return this._reservationStatus;
    }
    public set reservationStatus(value: boolean) {
        this._reservationStatus = value;
    }
    public get occupiedStatus(): boolean {
        return this._occupiedStatus;
    }
    public set occupiedStatus(value: boolean) {
        this._occupiedStatus = value;
    }
    public get car(): vehicle {
        return this._car;
    }
    public set car(value: vehicle) {
        this._car = value;
    }
    public get electricCharging(): boolean {
        return this._electricCharging;
    }
    public set electricCharging(value: boolean) {
        this._electricCharging = value;
    }
}



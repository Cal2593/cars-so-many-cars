import { vehicle } from './vehicleInterface';
import { clientVeh } from '..';
import { parkingSpot } from './parkingSpotInterface';
import { ParkingSpotType } from '../enums/parkingSpotType';

export class standardParkingSpot implements parkingSpot {
  private _ID: string;
  private _spotType = ParkingSpotType.Standard;
  private _reservationStatus: boolean;
  private _occupiedStatus: boolean;
  private _vehi: vehicle;
  private _electricCharging: boolean;
  private _covered: boolean;
  private _valet: boolean;
  private _location: string;
  private _spotRoofClearance: number;
  private _spotWidth: number;
  private _spotDepth: number;
  private _basePrice: number;
  
  constructor(
    id: string,
    resStat: boolean,
    occStat: boolean,
    vehi: vehicle, //do I need this?
    elecChar: boolean,
    covered: boolean,
    valet: boolean,
    location: string,
    roofclearance: number,
    spotwidth: number,
    spotdepth: number,
    baseprice: number
  ) 
  {
    this._ID = id;
    this._reservationStatus = resStat;
    this._occupiedStatus = occStat;
    this._vehi = clientVeh;
    this._electricCharging = elecChar;
    this._covered = covered;
    this._valet = valet;
    this._location = location;
    this._spotRoofClearance = roofclearance;
    this._spotWidth = spotwidth;
    this._spotDepth = spotdepth;
    this._basePrice = baseprice;
  }
  public get ID(): string {
    return this._ID;
  }
  public set ID(value: string) {
    this._ID = value;
  }
  public get spotType() {
    return this._spotType;
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
  public get vehicle(): vehicle {
    return this._vehi;
  }
  public set vehicle(value: vehicle) {
    this._vehi = value;
  }
  public get electricCharging(): boolean {
    return this._electricCharging;
  }
  public set electricCharging(value: boolean) {
    this._electricCharging = value;
  }
  public get covered(): boolean {
    return this._covered;
  }
  public set covered(value: boolean) {
    this._covered = value;
  }
  public get valet(): boolean {
    return this._valet;
  }
  public set valet(value: boolean) {
    this._valet = value;
  }
  public get location(): string {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }
  public get spotRoofClearance(): number {
    return this._spotRoofClearance;
  }
  public set spotRoofClearance(value: number) {
    this._spotRoofClearance = value;
  }
  public get spotWidth(): number {
    return this._spotWidth;
  }
  public set spotWidth(value: number) {
    this._spotWidth = value;
  }
  public get spotDepth(): number {
    return this._spotDepth;
  }
  public set spotDepth(value: number) {
    this._spotDepth = value;
  }
  public get basePrice(): number {
    return this._basePrice;
  }
  public set basePrice(value: number) {
    this._basePrice = value;
  }
}

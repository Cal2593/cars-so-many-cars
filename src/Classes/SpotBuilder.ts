//Model Object - This object simply contains get/sets to store data received from SpotDAOClass

import { ParkingSpotType } from "../enums/parkingSpotType";
import { ISpotBuilder } from "./ISpotBuilder";
import Spot from "./spot";

export class SpotBuilder implements ISpotBuilder {
  spot: Spot

  constructor(){
    this.spot = new Spot()
  }
  setID(ID:string): this {
    this.spot.ID = ID
    return this
  }

  setSpotType(spotType: ParkingSpotType): this {
      this.spot.spotType = ParkingSpotType
      return this
  }

  setReservedStatus(reserved: boolean): this {
      this.spot.reserved = reserved
      return this
  }

  setOccupiedStatus(occupied: boolean): this {
      this.spot.occupied = occupied
      return this
  }

  setLocation(location: string): this {
      this.spot.location = location
      return this
  }

  setBasePrice(basePrice: number): this {
      this.spot.basePrice = basePrice
      return this
  }

  getResult(): Spot {
      return this.spot
  }

  /*private _ID: string;
  private _spotType: string; //Can do ParkingSpotType.Standard to only allow Standard spots
  private _reservationStatus: boolean;
  private _occupiedStatus: boolean;
  private _vehicleRegistration: string;
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
    spotType: string,
    resStat: boolean,
    occStat: boolean,
    vehiReg: string,
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
    this._spotType = spotType;
    this._reservationStatus = resStat;
    this._occupiedStatus = occStat;
    this._vehicleRegistration = vehiReg;
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
  public get spotType(): string{
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
  public get vehicleRegistration(): string {
    return this._vehicleRegistration;
  }
  public set vehicleRegistration(value: string) {
    this._vehicleRegistration = value;
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
  }*/
}
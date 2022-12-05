import { vehicle } from './vehicleInterface';
import { VehicleType } from '../enums/vehicleType';

export class Motorhome implements vehicle {
  private _type = VehicleType.Motorhome;
  private _make: string;
  private _model: string;
  private _reg: string;
  private _owner: string;
  private _reservation: boolean;
  private _colour: string;
  private _height: number;
  private _weight: number;
  private _length: number;

  constructor(
    mak: string,
    mod: string,
    reg: string,
    own: string,
    res: boolean,
    col: string,
    hei: number,
    wei: number,
    len: number
  ) {
    this._make = mak;
    this._model = mod;
    this._reg = reg;
    this._owner = own;
    this._reservation = res;
    this._colour = col;
    this._height = hei;
    this._weight = wei;
    this._length = len;
  }

  public get type(): VehicleType {
    return this._type;
  }
  public get make(): string {
    return this._make;
  }
  public set make(value: string) {
    this._make = value;
  }
  public get model(): string {
    return this._model;
  }
  public set model(value: string) {
    this._model = value;
  }
  public get reg(): string {
    return this._reg;
  }
  public set reg(value: string) {
    this._reg = value;
  }
  public get owner(): string {
    return this._owner;
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public get reservation(): boolean {
    return this._reservation;
  }
  public set reservation(value: boolean) {
    this._reservation = value;
  }
  public get colour(): string {
    return this._colour;
  }
  public set colour(value: string) {
    this._colour = value;
  }
  public get height(): number {
    return this._height;
  }
  public set height(value: number) {
    this._height = value;
  }
  public get weight(): number {
    return this._weight;
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public get length(): number {
    return this._length;
  }
  public set length(value: number) {
    this._length = value;
  }
}

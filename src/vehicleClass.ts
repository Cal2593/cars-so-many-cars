import { VehicleType } from './vehicleType';

export class vehicle {
  private _type: VehicleType;
  private _make: string;
  private _model: string;
  private _reg: string;
  private _owner: string;
  private _reservation: boolean;

  constructor(
    type: VehicleType,
    mak: string,
    mod: string,
    reg: string,
    own: string,
    res: boolean
  ) {
    this._type = type;
    this._make = mak;
    this._model = mod;
    this._reg = reg;
    this._owner = own;
    this._reservation = res;
  }

  public get type(): VehicleType {
    return this._type;
  }
  public set type(value: VehicleType) {
    this._type = value;
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
}

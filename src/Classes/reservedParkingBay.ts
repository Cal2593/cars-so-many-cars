export class reservedParkingBay {
  private _UID: number;
  private _bayUID: number;
  private _reservationUID: number;
  private _reservedInterval: Interval;

  constructor(
    UID: number,
    bayUID: number,
    reservationUID: number,
    reservedInterval: Interval
  ) {
    this._UID = UID;
    this._bayUID = bayUID;
    this._reservationUID = reservationUID;
    this._reservedInterval = reservedInterval;
  }

  public get UID(): number {
    return this._UID;
  }
  public set UID(value: number) {
    this._UID = value;
  }
  public get bayUID(): number {
    return this._bayUID;
  }
  public set bayUID(value: number) {
    this._bayUID = value;
  }
  public get reservationUID(): number {
    return this._reservationUID;
  }
  public set reservationUID(value: number) {
    this._reservationUID = value;
  }
  public get reservedInterval(): Interval {
    return this._reservedInterval;
  }
  public set reservedInterval(value: Interval) {
    this._reservedInterval = value;
  }
}

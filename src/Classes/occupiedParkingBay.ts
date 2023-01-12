export class occupiedParkingBay {
  private _UID: number;
  private _bayUID: number;
  private _reservationUID: number;
  private _occupationEndDateTime: Date;

  constructor(
    UID: number,
    bayUID: number,
    reservationUID: number,
    occupationEndDateTime: Date
  ) {
    this._UID = UID;
    this._bayUID = bayUID;
    this._reservationUID = reservationUID;
    this._occupationEndDateTime = occupationEndDateTime;
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
  public get occupationEndDateTime(): Date {
    return this._occupationEndDateTime;
  }
  public set occupationEndDateTime(value: Date) {
    this._occupationEndDateTime = value;
  }
}

export class UserReservationRequest {
  private _userID: number;
  private _vehicleRegistration: string;
  private _reservationIntervalDateTime: Interval;
  private _electricChargingRequired: boolean;
  private _coveredSpotRequired: boolean;
  private _valetSpotRequired: boolean;
  private _accessibleSpotRequired: boolean;
  private _specificLocationRequired: string;

  constructor(
    userID: number,
    vehicleRegistration: string,
    resInt: Interval,
    elecRequired: boolean,
    covRequired: boolean,
    valRequired: boolean,
    accRequired: boolean,
    locationRequired: string
  ) {
    this._userID = userID;
    this._vehicleRegistration = vehicleRegistration;
    this._reservationIntervalDateTime = resInt;
    this._electricChargingRequired = elecRequired;
    this._coveredSpotRequired = covRequired;
    this._valetSpotRequired = valRequired;
    this._accessibleSpotRequired = accRequired;
    this._specificLocationRequired = locationRequired;
  }
  public get userID(): number {
    return this._userID;
  }

  public get vehicleRegistration(): string {
    return this._vehicleRegistration;
  }
  public get reservationIntervalDateTime(): Interval {
    return this._reservationIntervalDateTime;
  }
  public get electricChargingRequired(): boolean {
    return this._electricChargingRequired;
  }
  public get coveredSpotRequired(): boolean {
    return this._coveredSpotRequired;
  }
  public get valetSpotRequired(): boolean {
    return this._valetSpotRequired;
  }
  public get specificLocationRequired(): string {
    return this._specificLocationRequired;
  }
  public get UserReservationRequest(): UserReservationRequest {
    return this.UserReservationRequest;
  }
  public get accessibleSpotRequired(): boolean {
    return this._accessibleSpotRequired;
  }
}

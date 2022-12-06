export class UserReservationRequest {
    private _vehicleRegistration: string;
    private _reservationStartDateTime: Date;
    private _reservationEndDateTime: Date;
    private _electricChargingRequired: boolean;
    private _coveredSpotRequired: boolean;
    private _valetSpotRequired: boolean;
    private _specificLocationRequired: string;

    constructor(
        vehicleRegistration: string,
        resStart: Date,
        resEnd: Date,
        elecRequired: boolean,
        covRequired: boolean,
        valRequired: boolean,
        locationRequired: string
    ) {
        this._vehicleRegistration = vehicleRegistration;
        this._reservationStartDateTime = resStart;
        this._reservationEndDateTime = resEnd;
        this._electricChargingRequired = elecRequired;
        this._coveredSpotRequired = covRequired;
        this._valetSpotRequired = valRequired;
        this._specificLocationRequired = locationRequired;
    }

    public get vehicleRegistration(): string {
        return this._vehicleRegistration;
    }
    public get reservationStartDateTime(): Date {
        return this._reservationStartDateTime;
    }
    public get reservationEndDateTime(): Date {
        return this._reservationEndDateTime;
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
}
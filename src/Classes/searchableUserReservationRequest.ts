export class searchableUserReservationRequest {
    private _userID: number;
    private _vehicleRegistration: string;
    private _vehicleForm: string | boolean;
    private _reservationStartDateTime: Date;
    private _reservationEndDateTime: Date;
    private _electricChargingRequired: boolean;
    private _coveredSpotRequired: boolean;
    private _valetSpotRequired: boolean;
    private _specificLocationRequired: string;

    constructor(
        userID: number,
        vehicleRegistration: string,
        vehicleForm: string | boolean,
        resStart: Date,
        resEnd: Date,
        elecRequired: boolean,
        covRequired: boolean,
        valRequired: boolean,
        locationRequired: string
    ) {
        this._userID = userID;
        this._vehicleRegistration = vehicleRegistration;
        this._vehicleForm = vehicleForm;
        this._reservationStartDateTime = resStart;
        this._reservationEndDateTime = resEnd;
        this._electricChargingRequired = elecRequired;
        this._coveredSpotRequired = covRequired;
        this._valetSpotRequired = valRequired;
        this._specificLocationRequired = locationRequired;
    }
    public get userID(): number {
        return this._userID;
    }
    public set userID(value: number) {
        this._userID = value;
    }
    public get vehicleRegistration(): string {
        return this._vehicleRegistration;
    }
    public set vehicleRegistration(value: string) {
        this._vehicleRegistration = value;
    }
    public get vehicleForm(): string | boolean {
        return this._vehicleForm;
    }   
    public set vehicleForm(value: string | boolean) {
        this._vehicleForm = value;
    }
    public get reservationStartDateTime(): Date {
        return this._reservationStartDateTime;
    }
    public set reservationStartDateTime(value: Date) {
        this._reservationStartDateTime = value;
    }
    public get reservationEndDateTime(): Date {
        return this._reservationEndDateTime;
    }
    public set reservationEndDateTime(value: Date) {
        this._reservationEndDateTime = value;
    }
    public get electricChargingRequired(): boolean {
        return this._electricChargingRequired;
    }
    public set electricChargingRequired(value: boolean) {
        this._electricChargingRequired = value;
    }
    public get coveredSpotRequired(): boolean {
        return this._coveredSpotRequired;
    }
    public set coveredSpotRequired(value: boolean) {
        this._coveredSpotRequired = value;
    }
    public get valetSpotRequired(): boolean {
        return this._valetSpotRequired;
    }
    public set valetSpotRequired(value: boolean) {
        this._valetSpotRequired = value;
    }
    public get specificLocationRequired(): string {
        return this._specificLocationRequired;
    }
    public set specificLocationRequired(value: string) {
        this._specificLocationRequired = value;
    }
    public get searchableUserReservationRequest(): searchableUserReservationRequest {
        return this.searchableUserReservationRequest;
    }
}
export class decodedReservation {
    private _bayID: string;
    private _vehicle: string;
    private _reservationDate: string;
    private _reservationStartTime: string;
    private _reservationEndTime: string;
    private _reservationLocation: string;
    private _reservationPrice: number;

    constructor(
        bayID: string,
        vehicle: string,
        reservationDate: string,
        reservationStartTime: string,
        reservationEndTime: string,
        reservationLocation: string,
        reservationPrice: number
    ) {
        this._bayID = bayID;
        this._vehicle = vehicle;
        this._reservationDate = reservationDate;
        this._reservationStartTime = reservationStartTime;
        this._reservationEndTime = reservationEndTime;
        this._reservationLocation = reservationLocation;
        this._reservationPrice = reservationPrice;
    }
    public get bayID(): string {
        return this._bayID;
    }
    public set bayID(value: string) {
        this._bayID = value;
    }
    public get vehicle(): string {
        return this._vehicle;
    }
    public set vehicle(value: string) {
        this._vehicle = value;
    }
    public get reservationDate(): string {
        return this._reservationDate;
    }
    public set reservationDate(value: string) {
        this._reservationDate = value;
    }
    public get reservationStartTime(): string {
        return this._reservationStartTime;
    }
    public set reservationStartTime(value: string) {
        this._reservationStartTime = value;
    }
    public get reservationEndTime(): string {
        return this._reservationEndTime;
    }
    public set reservationEndTime(value: string) {
        this._reservationEndTime = value;
    }
    public get reservationLocation(): string {
        return this._reservationLocation;
    }
    public set reservationLocation(value: string) {
        this._reservationLocation = value;
    }
    public get reservationPrice(): number {
        return this._reservationPrice;
    }
    public set reservationPrice(value: number) {
        this._reservationPrice = value;
    }
}
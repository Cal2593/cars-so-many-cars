import { Interval } from "date-fns";

export class reservation {
    private _UID: number;
    private _bayUID: number;
    private _userUID: number;
    private _vehicle: string;
    private _reservationInterval: Interval;
    private _reservationCreationTS: Date;
    private _reservationUpdateTS: Date;
    private _discountPercent: number;
    private _pricePaid: number;

    constructor(
        UID: number,
        bayUID: number,
        userUID: number,
        vehicle: string,
        resInterval: Interval,
        resCreate: Date,
        resUpdate: Date,
        discount: number,
        price: number
    ) {
        this._UID = UID;
        this._bayUID = bayUID;
        this._userUID = userUID;
        this._vehicle = vehicle;
        this._reservationInterval = resInterval;
        this._reservationCreationTS = resCreate;
        this._reservationUpdateTS = resUpdate;
        this._discountPercent = discount;
        this._pricePaid = price;
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
    public get userUID(): number {
        return this._userUID;
    }
    public set userUID(value: number) {
        this._userUID = value;
    }
    public get vehicle(): string {
        return this._vehicle;
    }
    public set vehicle(value: string) {
        this._vehicle = value;
    }
    public get reservationInterval(): Interval {
        return this._reservationInterval;
    }
    public set reservationInterval(value: Interval) {
        this._reservationInterval = value;
    }
    public get reservationCreationTS(): Date {
        return this._reservationCreationTS;
    }
    public set reservationCreationTS(value: Date) {
        this._reservationCreationTS = value;
    }
    public get reservationUpdateTS(): Date {
        return this._reservationUpdateTS;
    }
    public set reservationUpdateTS(value: Date) {
        this._reservationUpdateTS = value;
    }
    public get discountPercent(): number {
        return this._discountPercent;
    }
    public set discountPercent(value: number) {
        this._discountPercent = value;
    }
    public get pricePaid(): number {
        return this._pricePaid;
    }
    public set pricePaid(value: number) {
        this._pricePaid = value;
    }
}
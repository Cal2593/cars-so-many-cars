export class reservation {
    private _UID: number;
    private _bayUID: number;
    private _userUID: number;
    private _vehicle: string;
    private _reservationStartDateTime: Date;
    private _reservationEndDateTime: Date;
    private _reservationCreationTS: Date;
    private _reservationUpdateTS: Date;
    private _discountPercent: number;
    private _pricePaid: number;

    constructor(
        UID: number,
        bayUID: number,
        userUID: number,
        vehicle: string,
        resStart: Date,
        resEnd: Date,
        resCreate: Date,
        resUpdate: Date,
        discount: number,
        price: number
    ) {
        this._UID = UID;
        this._bayUID = bayUID;
        this._userUID = userUID;
        this._vehicle = vehicle;
        this._reservationStartDateTime = resStart;
        this._reservationEndDateTime = resEnd;
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
/*
  - reservation class
    - UID
    - spot UID
    - user UID
    - vehicle registration
    - start date/time
    - end date/time
    - reservation creation date/time
    - reservation updated date/time
    - discount percent (for calculating price - if they're on a payment plan this can be 100)
    - price
*/
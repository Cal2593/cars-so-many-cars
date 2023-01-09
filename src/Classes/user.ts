import { reservation } from "./reservation";

export class user{
    private _UID: number;
    private _firstName: string;
    private _lastName: string;
    private _email: string;
    private _phone: string;
    private _address: string;
    private _isActive: boolean;
    private _userCreated: Date;
    private _userUpdated: Date;
    private _paymentPlan: string;
    private _vehicles: string[];
    private _password: string;
    private _reservations: reservation[];

    constructor(
        UID: number,
        firstName: string,
        lastName: string,
        email: string,
        phone: string,
        address: string,
        isActive: boolean,
        userCreated: Date,
        userUpdated: Date,
        paymentPlan: string,
        vehicles: string[],
        password: string,
        reservations: reservation[]
    ){
        this._UID = UID;
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._phone = phone;
        this._address = address;
        this._isActive = isActive;
        this._userCreated = userCreated;
        this._userUpdated = userUpdated;
        this._paymentPlan = paymentPlan;
        this._reservations = reservations;
        this._vehicles = vehicles;
        this._password = password;
    }

    public get UID(): number {
        return this._UID;
    }
    public set UID(value: number) {
        this._UID = value;
    }
    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(value: string) {
        this._firstName = value;
    }
    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    public get phone(): string {
        return this._phone;
    }
    public set phone(value: string) {
        this._phone = value;
    }
    public get address(): string {
        return this._address;
    }
    public set address(value: string) {
        this._address = value;
    }
    public get isActive(): boolean {
        return this._isActive;
    }
    public set isActive(value: boolean) {
        this._isActive = value;
    }
    public get userCreated(): Date {
        return this._userCreated;
    }
    public set userCreated(value: Date) {
        this._userCreated = value;
    }
    public get userUpdated(): Date {
        return this._userUpdated;
    }
    public set userUpdated(value: Date) {
        this._userUpdated = value;
    }
    public get paymentPlan(): string {
        return this._paymentPlan;
    }
    public set paymentPlan(value: string) {
        this._paymentPlan = value;
    }
    public get reservations(): reservation[] {
        return this._reservations;
    }
    public set reservations(value: reservation[]) {
        this._reservations = value;
    }
    public get vehicles(): string[] {
        return this._vehicles;
    }
    public set vehicles(value: string[]) {
        this._vehicles = value;
    }
    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }
}
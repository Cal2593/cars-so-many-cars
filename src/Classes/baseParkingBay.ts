export class baseParkingBay {
    private _UID: number;
    private _Reference: string;
    private _Type: string;
    private _Location: string;
    private _covering: boolean;
    private _electric: boolean;
    private _valet: boolean;

    constructor(
        UID: number,
        Reference: string,
        Type: string,
        Location: string,
        covering: boolean,
        electric: boolean,
        valet: boolean
    ) {
        this._UID = UID;
        this._Reference = Reference;
        this._Type = Type;
        this._Location = Location;
        this._covering = covering;
        this._electric = electric;
        this._valet = valet;
    }
    public get UID(): number {
        return this._UID;
    }
    public set UID(value: number) {
        this._UID = value;
    }
    public get Reference(): string {
        return this._Reference;
    }
    public set Reference(value: string) {
        this._Reference = value;
    }
    public get Type(): string {
        return this._Type;
    }
    public set Type(value: string) {
        this._Type = value;
    }
    public get Location(): string {
        return this._Location;
    }
    public set Location(value: string) {
        this._Location = value;
    }
    public get covering(): boolean {
        return this._covering;
    }
    public set covering(value: boolean) {
        this._covering = value;
    }
    public get electric(): boolean {
        return this._electric;
    }
    public set electric(value: boolean) {
        this._electric = value;
    }
    public get valet(): boolean {
        return this._valet;
    }
    public set valet(value: boolean) {
        this._valet = value;
    }
}
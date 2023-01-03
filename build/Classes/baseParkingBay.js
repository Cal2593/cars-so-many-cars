"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseParkingBay = void 0;
class baseParkingBay {
    constructor(ID, Type, Location, covering, electric, valet) {
        this._ID = ID;
        this._Type = Type;
        this._Location = Location;
        this._covering = covering;
        this._electric = electric;
        this._valet = valet;
    }
    get ID() {
        return this._ID;
    }
    set ID(value) {
        this._ID = value;
    }
    get Type() {
        return this._Type;
    }
    set Type(value) {
        this._Type = value;
    }
    get Location() {
        return this._Location;
    }
    set Location(value) {
        this._Location = value;
    }
    get covering() {
        return this._covering;
    }
    set covering(value) {
        this._covering = value;
    }
    get electric() {
        return this._electric;
    }
    set electric(value) {
        this._electric = value;
    }
    get valet() {
        return this._valet;
    }
    set valet(value) {
        this._valet = value;
    }
}
exports.baseParkingBay = baseParkingBay;

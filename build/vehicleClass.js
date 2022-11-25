"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vehicle = void 0;
class vehicle {
    constructor(type, mak, mod, reg, own, res) {
        this._type = type;
        this._make = mak;
        this._model = mod;
        this._reg = reg;
        this._owner = own;
        this._reservation = res;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get make() {
        return this._make;
    }
    set make(value) {
        this._make = value;
    }
    get model() {
        return this._model;
    }
    set model(value) {
        this._model = value;
    }
    get reg() {
        return this._reg;
    }
    set reg(value) {
        this._reg = value;
    }
    get owner() {
        return this._owner;
    }
    set owner(value) {
        this._owner = value;
    }
    get reservation() {
        return this._reservation;
    }
    set reservation(value) {
        this._reservation = value;
    }
}
exports.vehicle = vehicle;

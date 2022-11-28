"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Caravan = void 0;
const vehicleType_1 = require("../enums/vehicleType");
class Caravan {
    constructor(mak, mod, reg, own, res, col, hei, wei, len) {
        this._type = vehicleType_1.VehicleType.Caravan;
        this._make = mak;
        this._model = mod;
        this._reg = reg;
        this._owner = own;
        this._reservation = res;
        this._colour = col;
        this._height = hei;
        this._weight = wei;
        this._length = len;
    }
    get type() {
        return this._type;
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
    get colour() {
        return this._colour;
    }
    set colour(value) {
        this._colour = value;
    }
    get height() {
        return this._height;
    }
    set height(value) {
        this._height = value;
    }
    get weight() {
        return this._weight;
    }
    set weight(value) {
        this._weight = value;
    }
    get length() {
        return this._length;
    }
    set length(value) {
        this._length = value;
    }
}
exports.Caravan = Caravan;

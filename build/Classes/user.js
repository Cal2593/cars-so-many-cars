"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
class user {
    constructor(UID, firstName, lastName, email, phone, address, isActive, userCreated, userUpdated, paymentPlan, vehicles, password, reservations) {
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
    get UID() {
        return this._UID;
    }
    set UID(value) {
        this._UID = value;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get phone() {
        return this._phone;
    }
    set phone(value) {
        this._phone = value;
    }
    get address() {
        return this._address;
    }
    set address(value) {
        this._address = value;
    }
    get isActive() {
        return this._isActive;
    }
    set isActive(value) {
        this._isActive = value;
    }
    get userCreated() {
        return this._userCreated;
    }
    set userCreated(value) {
        this._userCreated = value;
    }
    get userUpdated() {
        return this._userUpdated;
    }
    set userUpdated(value) {
        this._userUpdated = value;
    }
    get paymentPlan() {
        return this._paymentPlan;
    }
    set paymentPlan(value) {
        this._paymentPlan = value;
    }
    get reservations() {
        return this._reservations;
    }
    set reservations(value) {
        this._reservations = value;
    }
    get vehicles() {
        return this._vehicles;
    }
    set vehicles(value) {
        this._vehicles = value;
    }
    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
    }
}
exports.user = user;

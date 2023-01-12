"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchableUserReservationRequest = void 0;
class searchableUserReservationRequest {
    constructor(userID, vehicleRegistration, vehicleForm, resInt, elecRequired, covRequired, valRequired, accRequired, locationRequired) {
        this._userID = userID;
        this._vehicleRegistration = vehicleRegistration;
        this._vehicleForm = vehicleForm;
        this._reservationIntervalDateTime = resInt;
        this._electricChargingRequired = elecRequired;
        this._coveredSpotRequired = covRequired;
        this._valetSpotRequired = valRequired;
        this._accessibleSpotRequired = accRequired;
        this._specificLocationRequired = locationRequired;
    }
    get userID() {
        return this._userID;
    }
    set userID(value) {
        this._userID = value;
    }
    get vehicleRegistration() {
        return this._vehicleRegistration;
    }
    set vehicleRegistration(value) {
        this._vehicleRegistration = value;
    }
    get vehicleForm() {
        return this._vehicleForm;
    }
    set vehicleForm(value) {
        this._vehicleForm = value;
    }
    get reservationIntervalDateTime() {
        return this._reservationIntervalDateTime;
    }
    set reservationIntervalDateTime(value) {
        this._reservationIntervalDateTime = value;
    }
    get electricChargingRequired() {
        return this._electricChargingRequired;
    }
    set electricChargingRequired(value) {
        this._electricChargingRequired = value;
    }
    get coveredSpotRequired() {
        return this._coveredSpotRequired;
    }
    set coveredSpotRequired(value) {
        this._coveredSpotRequired = value;
    }
    get valetSpotRequired() {
        return this._valetSpotRequired;
    }
    set valetSpotRequired(value) {
        this._valetSpotRequired = value;
    }
    get specificLocationRequired() {
        return this._specificLocationRequired;
    }
    set specificLocationRequired(value) {
        this._specificLocationRequired = value;
    }
    get searchableUserReservationRequest() {
        return this.searchableUserReservationRequest;
    }
    get accessibleSpotRequired() {
        return this._accessibleSpotRequired;
    }
    set accessibleSpotRequired(value) {
        this._accessibleSpotRequired = value;
    }
}
exports.searchableUserReservationRequest = searchableUserReservationRequest;

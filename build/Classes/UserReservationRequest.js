"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserReservationRequest = void 0;
class UserReservationRequest {
    constructor(userID, vehicleRegistration, resInt, elecRequired, covRequired, valRequired, accRequired, locationRequired) {
        this._userID = userID;
        this._vehicleRegistration = vehicleRegistration;
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
    get vehicleRegistration() {
        return this._vehicleRegistration;
    }
    get reservationIntervalDateTime() {
        return this._reservationIntervalDateTime;
    }
    get electricChargingRequired() {
        return this._electricChargingRequired;
    }
    get coveredSpotRequired() {
        return this._coveredSpotRequired;
    }
    get valetSpotRequired() {
        return this._valetSpotRequired;
    }
    get specificLocationRequired() {
        return this._specificLocationRequired;
    }
    get UserReservationRequest() {
        return this.UserReservationRequest;
    }
    get accessibleSpotRequired() {
        return this._accessibleSpotRequired;
    }
}
exports.UserReservationRequest = UserReservationRequest;

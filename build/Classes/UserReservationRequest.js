"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserReservationRequest = void 0;
class UserReservationRequest {
    constructor(userID, vehicleRegistration, resStart, resEnd, elecRequired, covRequired, valRequired, locationRequired) {
        this._userID = userID;
        this._vehicleRegistration = vehicleRegistration;
        this._reservationStartDateTime = resStart;
        this._reservationEndDateTime = resEnd;
        this._electricChargingRequired = elecRequired;
        this._coveredSpotRequired = covRequired;
        this._valetSpotRequired = valRequired;
        this._specificLocationRequired = locationRequired;
    }
    get userID() {
        return this._userID;
    }
    get vehicleRegistration() {
        return this._vehicleRegistration;
    }
    get reservationStartDateTime() {
        return this._reservationStartDateTime;
    }
    get reservationEndDateTime() {
        return this._reservationEndDateTime;
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
}
exports.UserReservationRequest = UserReservationRequest;

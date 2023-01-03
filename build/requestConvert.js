"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestConvert = void 0;
const searchableUserReservationRequest_1 = require("./Classes/searchableUserReservationRequest");
function requestConvert(reservationRequest, valetResponse, coverResponse, elecResponse, vehicleForm) {
    const searchable = new searchableUserReservationRequest_1.searchableUserReservationRequest(reservationRequest.userID, reservationRequest.vehicleRegistration, vehicleForm, reservationRequest.reservationStartDateTime, reservationRequest.reservationEndDateTime, elecResponse, coverResponse, valetResponse, reservationRequest.accessibleSpotRequired, reservationRequest.specificLocationRequired);
    return searchable;
}
exports.requestConvert = requestConvert;

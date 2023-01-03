import { UserReservationRequest } from "./Classes/UserReservationRequest";
import { searchableUserReservationRequest } from "./Classes/searchableUserReservationRequest";

export function requestConvert(reservationRequest: UserReservationRequest, valetResponse: boolean, coverResponse:boolean, elecResponse:boolean, vehicleForm: string | boolean){
    const searchable: searchableUserReservationRequest = new searchableUserReservationRequest(
    reservationRequest.userID,
    reservationRequest.vehicleRegistration,
    vehicleForm,
    reservationRequest.reservationStartDateTime,
    reservationRequest.reservationEndDateTime,
    elecResponse,
    coverResponse,
    valetResponse,
    reservationRequest.specificLocationRequired)
    return searchable;
}
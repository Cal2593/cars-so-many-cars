import { UserReservationRequest } from './Classes/UserReservationRequest';
import { RegistrationAPICall } from './RegistrationAPICall';
import { getVehicleData } from './getVehicleData';
import { ReservationRequestChecker } from './ReservationRequestChecker';
import { requestConvert } from './requestConvert';
import { searchableUserReservationRequest } from './Classes/searchableUserReservationRequest';

export function reservationCheck(
  reservationRequest: UserReservationRequest,
  callback: (data: searchableUserReservationRequest) => void
) {
  const vehicleRegistrationForSearch: string =
    reservationRequest.vehicleRegistration;
  RegistrationAPICall(vehicleRegistrationForSearch);

  let vehicleData;
  let data: searchableUserReservationRequest;
  setTimeout(() => {
    vehicleData = getVehicleData();
    console.log(vehicleData);
    const response: boolean | string | string[] = ReservationRequestChecker(
      reservationRequest,
      vehicleData
    );
    let valetResponse = false;
    let coverResponse = false;
    let elecResponse = false;
    const vehicleForm: string | boolean = vehicleData[2];
    if (response == false) {
      //revamp this in the response creator to check if valeting can be offered
      coverResponse = reservationRequest.coveredSpotRequired;
      elecResponse = reservationRequest.electricChargingRequired;
      valetResponse = reservationRequest.valetSpotRequired;
      data = requestConvert(
        reservationRequest,
        valetResponse,
        coverResponse,
        elecResponse,
        vehicleForm
      );
      callback(data);
    } else {
      console.log(response.toString());
      //await response from user about altering the reservation request
      switch (vehicleForm) {
        case 'Lorry':
          valetResponse = false; //Hard code
          coverResponse = false; //Hard code
          elecResponse = false; //Hard code
          break;

        case 'Motorhome/Caravan':
          valetResponse = false; //Hard code
          coverResponse = false; //Hard code
          elecResponse = true; // Actual user response
          break;

        case 'Motorbike':
        case 'Tricycle':
        case 'Car':
          const usersValetResp = false; //pulling in actual response
          const usersCoverResp = false; //pulling in actual response
          const usersElecResp = true; //pulling in actual response
          if (usersValetResp) {
            valetResponse = true;
            coverResponse = true;
            elecResponse = false;
          } else if (!usersValetResp) {
            valetResponse = false;
            if (usersElecResp) {
              elecResponse = true;
              coverResponse = true;
            } else {
              elecResponse = false;
              coverResponse = usersCoverResp;
            }
          }
          break;
      }
      //assign user response into reservation request
      data = requestConvert(
        reservationRequest,
        valetResponse,
        coverResponse,
        elecResponse,
        vehicleForm
      );
      callback(data);
    }
  }, 500);
}

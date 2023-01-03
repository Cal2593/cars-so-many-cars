"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reservationCheck = void 0;
const RegistrationAPICall_1 = require("./RegistrationAPICall");
const getVehicleData_1 = require("./getVehicleData");
const ReservationRequestChecker_1 = require("./ReservationRequestChecker");
const requestConvert_1 = require("./requestConvert");
function reservationCheck(reservationRequest, callback) {
    const vehicleRegistrationForSearch = reservationRequest.vehicleRegistration;
    (0, RegistrationAPICall_1.RegistrationAPICall)(vehicleRegistrationForSearch);
    let vehicleData;
    let data;
    setTimeout(() => {
        vehicleData = (0, getVehicleData_1.getVehicleData)();
        //console.log(vehicleData);
        const response = (0, ReservationRequestChecker_1.ReservationRequestChecker)(reservationRequest, vehicleData);
        let valetResponse = false;
        let coverResponse = false;
        let elecResponse = false;
        const vehicleForm = vehicleData[2];
        if (response == false) {
            //revamp this in the response creator to check if valeting can be offered
            coverResponse = reservationRequest.coveredSpotRequired;
            elecResponse = reservationRequest.electricChargingRequired;
            valetResponse = reservationRequest.valetSpotRequired;
            data = (0, requestConvert_1.requestConvert)(reservationRequest, valetResponse, coverResponse, elecResponse, vehicleForm);
            callback(data);
        }
        else {
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
                    const usersValetResp = true; //pulling in actual response
                    const usersCoverResp = false; //pulling in actual response
                    const usersElecResp = false; //pulling in actual response
                    if (usersValetResp) {
                        valetResponse = true;
                        coverResponse = true;
                        elecResponse = usersElecResp;
                    }
                    else if (!usersValetResp) {
                        valetResponse = false;
                        if (usersElecResp) {
                            elecResponse = true;
                            coverResponse = true;
                        }
                        else {
                            elecResponse = false;
                            coverResponse = usersCoverResp;
                        }
                    }
                    break;
            }
            //assign user response into reservation request
            data = (0, requestConvert_1.requestConvert)(reservationRequest, valetResponse, coverResponse, elecResponse, vehicleForm);
            callback(data);
        }
    }, 500);
}
exports.reservationCheck = reservationCheck;

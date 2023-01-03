"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationRequestChecker = void 0;
function ReservationRequestChecker(reservationRequest, vehicleData) {
    let responseNecessary = false;
    const response = [];
    let FinalResponse = '';
    switch (vehicleData[2]) {
        case 'Lorry':
            if (reservationRequest.elecRequired ||
                reservationRequest.covRequired ||
                reservationRequest.valRequired) {
                responseNecessary = true;
                response.push('Unfortunately we are unable to offer the following for lorries:');
                if (reservationRequest.elecRequired) {
                    response.push(' Electric charging points;');
                }
                if (reservationRequest.covRequired) {
                    response.push(' Covered parking spaces;');
                }
                if (reservationRequest.valRequired) {
                    response.push(' Valeting services.');
                }
                FinalResponse = responseChecker(response);
            }
            break;
        case 'Motorhome/Caravan':
            if (!reservationRequest.elecRequired ||
                reservationRequest.covRequired ||
                reservationRequest.valRequired) {
                if (!reservationRequest.elecRequired) {
                    responseNecessary = true;
                    response.push('Would you like to add an electric hook up point to your booking?');
                    //can put a check in here to see if an electric hook up spot is available before offering
                    if (reservationRequest.covRequired ||
                        reservationRequest.valRequired) {
                        response.push('We are unable to offer the following for Motorhomes and Caravans:');
                    }
                }
                const respLen = response.length;
                if (reservationRequest.covRequired) {
                    responseNecessary = true;
                    if (respLen > 0) {
                        response.push(' Covered parking spaces;');
                    }
                    else {
                        response.push('Unfortunately we are unable to offer the following for Motorhomes and Caravans:');
                        response.push(' Covered parking spaces;');
                    }
                }
                if (reservationRequest.valRequired) {
                    responseNecessary = true;
                    if (respLen > 0) {
                        response.push(' Valeting services.');
                    }
                    else {
                        response.push('Unfortunately we are unable to offer the following for Motorhomes and Caravans:');
                        response.push(' Valeting services.');
                    }
                }
                FinalResponse = responseChecker(response);
            }
            break;
        case 'Motorbike':
        case 'Tricycle':
        case 'Car':
            if ((!reservationRequest.elecRequired && vehicleData[3] == true) ||
                !reservationRequest.covRequired ||
                !reservationRequest.valRequired ||
                !reservationRequest.accRequired) {
                responseNecessary = true;
                response.push('Would you like to add');
                if (!reservationRequest.elecRequired && vehicleData[3] == true) {
                    response.push(' an electric charging point;'); //set up to add response as tickable check boxes
                }
                if (!reservationRequest.covRequired) {
                    response.push(' a covered parking space;');
                }
                if (!reservationRequest.valRequired) {
                    response.push(' valeting services ');
                }
                const newResponse = responseChecker(response);
                FinalResponse = newResponse.slice(0, -1) + ' to your booking?';
                if (!reservationRequest.accRequired) {
                    FinalResponse = FinalResponse + "\nDo you require an accessible parking spot?";
                }
            }
            break;
    }
    if (responseNecessary)
        return FinalResponse;
    return responseNecessary;
}
exports.ReservationRequestChecker = ReservationRequestChecker;
function responseChecker(response) {
    let finalResponse = '';
    if (response.length == 2 || response.length == 3) {
        const finalChunk = response[response.length - 1].toString();
        response.pop();
        const newChunk = finalChunk.slice(0, -1) + '.';
        response.push(newChunk);
        if (response.length == 3) {
            const midchunk = response[1].toString().slice(0, -1) + ' or';
            response.splice(1, 1, midchunk);
        }
    }
    if (response.length == 4) {
        const chunkOne = response[1].toString().slice(0, -1) + ',';
        const chunkTwo = response[2].toString().slice(0, -1) + ' or';
        const finalchunk = response[3];
        response = response.splice(0, 3);
        response.push(chunkOne, chunkTwo, finalchunk);
    }
    finalResponse = response.toString().replaceAll(',', '');
    return finalResponse;
}

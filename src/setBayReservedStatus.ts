import { reservedParkingBay } from "./Classes/reservedParkingBay";
import { reservation } from "./Classes/reservation";
const fs = require('fs');

export function setBayReservedStatus(res: reservation,lastuid: number){

    let UID = lastuid+1
    let bayUID = res.bayUID;
    let resUID = res.UID;
    let resInt = res.reservationInterval;

    let resBay: reservedParkingBay = new reservedParkingBay(
        UID,
        bayUID,
        resUID,
        resInt
    )

    return resBay;
}
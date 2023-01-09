import { occupiedParkingBay } from "./Classes/occupiedParkingBay";
import { reservation } from "./Classes/reservation";
const fs = require('fs');
const toDate = require('date-fns/toDate');

export function setBayOccupiedStatus(res: reservation, lastuid:number){

    let UID = lastuid+1
    let bayUID = res.bayUID;
    let resUID = res.UID;
    let occEnd = toDate(res.reservationInterval.end);

    let occ: occupiedParkingBay = new occupiedParkingBay(
        UID,
        bayUID,
        resUID,
        occEnd
    )

    return occ;
}
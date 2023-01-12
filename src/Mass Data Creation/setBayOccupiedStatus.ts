import { occupiedParkingBay } from '../Classes/occupiedParkingBay';
import { reservation } from '../Classes/reservation';
const toDate = require('date-fns/toDate');

export function setBayOccupiedStatus(res: reservation, lastuid: number) {
  const UID = lastuid + 1;
  const bayUID = res.bayUID;
  const resUID = res.UID;
  const occEnd = toDate(res.reservationInterval.end);

  const occ: occupiedParkingBay = new occupiedParkingBay(
    UID,
    bayUID,
    resUID,
    occEnd
  );

  return occ;
}

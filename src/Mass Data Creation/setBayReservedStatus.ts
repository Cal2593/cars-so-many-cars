import { reservedParkingBay } from '../Classes/reservedParkingBay';
import { reservation } from '../Classes/reservation';

export function setBayReservedStatus(res: reservation, lastuid: number) {
  const UID = lastuid + 1;
  const bayUID = res.bayUID;
  const resUID = res.UID;
  const resInt = res.reservationInterval;

  const resBay: reservedParkingBay = new reservedParkingBay(
    UID,
    bayUID,
    resUID,
    resInt
  );

  return resBay;
}

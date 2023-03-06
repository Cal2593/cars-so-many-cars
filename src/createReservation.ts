import {
  isWithinInterval,
  intervalToDuration,
  isEqual,
  toDate
} from 'date-fns';
import { baseParkingBay } from './Classes/baseParkingBay';
import { occupiedParkingBay } from './Classes/occupiedParkingBay';
import { reservation } from './Classes/reservation';
import { reservedParkingBay } from './Classes/reservedParkingBay';
import { searchableUserReservationRequest } from './Classes/searchableUserReservationRequest';
import { user } from './Classes/user';
import { getUser } from './getUser';

export function createReservation(
  bay: baseParkingBay,
  resReq: searchableUserReservationRequest,
  callback: (res: reservation) => void
) {
  const fs = require('fs');
  const reservationsRaw = fs.readFileSync(
    '../cars-so-many-cars/src/Arrays/reservations.json'
  );
  const reservationsFile = JSON.parse(reservationsRaw);

  const reservationUIDRawFile = fs.readFileSync(
    '../cars-so-many-cars/src/Arrays/reservationUID.json'
  );
  const reservationUIDFinalFile = JSON.parse(reservationUIDRawFile);

  const use: user = getUser(resReq.userID)!;

  const UID: number = reservationUIDFinalFile.lastID + 1;
  const bayUID: number = bay.UID;
  const userUID: number = resReq.userID;
  const vehicle: string = resReq.vehicleRegistration;
  const resInterval: Interval = resReq.reservationIntervalDateTime;
  const resCreate: Date = new Date();
  const resUpdate: Date = new Date();
  let discount: number;
  switch (use.paymentPlan) {
    case 'Monthly':
      discount = 20;
      break;
    case 'Annual':
      discount = 40;
      break;
    default:
      discount = 0;
  }
  let pricePerHour = 0;
  switch (bay.Type) {
    case 'Lorry':
      pricePerHour = 5;
      break;
    case 'MotorhomeAndCaravan':
      if (resReq.electricChargingRequired) {
        pricePerHour = 3;
      } else {
        pricePerHour = 2;
      }
      break;
    case 'Valet':
      pricePerHour = 3;
      break;
    case 'ElectricCharging':
      pricePerHour = 2;
      break;
    case 'Motorbike':
    case 'Accessible':
    case 'Standard':
      pricePerHour = 1;
      break;
  }
  const duration: Duration = intervalToDuration(
    resReq.reservationIntervalDateTime
  );
  const hours = duration.hours!;
  const minutes = duration.minutes!;
  const factor = 10 ** 2;
  const finalMinutes = Math.round(minutes * factor) / factor;
  const finalDuration: number = hours + finalMinutes;
  const durationPrice: number = pricePerHour * finalDuration;
  const finalDurationPrice = Math.round(durationPrice * factor) / factor;
  const price: number =
    finalDurationPrice - (finalDurationPrice * discount) / 100;

  const res: reservation = new reservation(
    UID,
    bayUID,
    userUID,
    vehicle,
    resInterval,
    resCreate,
    resUpdate,
    discount,
    price
  );
  const finalUID: string = '{"lastID":' + UID + '}';
  fs.writeFileSync(
    '../cars-so-many-cars/src/Arrays/reservationUID.json',
    finalUID,
    (err: any) => {
      if (err) throw err;
    }
  );

  reservationsFile.push(res);
  const finalReservationsFile: string = JSON.stringify(
    reservationsFile,
    null,
    2
  );
  fs.writeFileSync(
    '../cars-so-many-cars/src/Arrays/reservations.json',
    finalReservationsFile,
    (err: any) => {
      if (err) throw err;
    }
  );

  const usersRawFile = fs.readFileSync(
    '../cars-so-many-cars/src/Arrays/userList.json'
  );
  const usersFinalFile = JSON.parse(usersRawFile);
  let found = false;
  for (let i = 0; i < usersFinalFile.length && found == false; i++) {
    const userRec: user = new user(
      usersFinalFile[i]._UID,
      usersFinalFile[i]._firstName,
      usersFinalFile[i]._lastName,
      usersFinalFile[i]._email,
      usersFinalFile[i]._phone,
      usersFinalFile[i]._address,
      usersFinalFile[i]._isActive,
      usersFinalFile[i]._userCreated,
      usersFinalFile[i]._userUpdated,
      usersFinalFile[i]._paymentPlan,
      usersFinalFile[i]._vehicles,
      usersFinalFile[i]._password,
      usersFinalFile[i]._reservations
    );
    if (userRec.UID == resReq.userID) {
      userRec.reservations.push(res.UID);
      found = true;
    }
  }

  const finalUserList: string = JSON.stringify(usersFinalFile, null, 2);
  fs.writeFileSync(
    '../cars-so-many-cars/src/Arrays/userList.json',
    finalUserList,
    (err: any) => {
      if (err) throw err;
    }
  );

  if (
    isWithinInterval(new Date(), resReq.reservationIntervalDateTime) ||
    isEqual(new Date(), resReq.reservationIntervalDateTime.start)
  ) {
    //create occupied bay
    const occupiedBaysRaw = fs.readFileSync(
      '../cars-so-many-cars/src/Arrays/occupiedBays.json'
    );
    const occupiedBaysFile = JSON.parse(occupiedBaysRaw);

    const occupiedUIDRawFile = fs.readFileSync(
      '../cars-so-many-cars/src/Arrays/occupiedUID.json'
    );
    const occupiedUIDFinalFile = JSON.parse(occupiedUIDRawFile);

    const lastoccUID: number = occupiedUIDFinalFile.lastID + 1;

    const occRecord: occupiedParkingBay = new occupiedParkingBay(
      lastoccUID,
      res.bayUID,
      res.UID,
      toDate(res.reservationInterval.end)
    );

    occupiedBaysFile.push(occRecord);
    const finalOccupiedArr: string = JSON.stringify(occupiedBaysFile, null, 2);
    fs.writeFileSync(
      '../cars-so-many-cars/src/Arrays/occupiedBays.json',
      finalOccupiedArr,
      (err: any) => {
        if (err) throw err;
      }
    );

    const finaloccUID: string = '{"lastID":' + lastoccUID + '}';
    fs.writeFileSync(
      '../cars-so-many-cars/src/Arrays/occupiedUID.json',
      finaloccUID,
      (err: any) => {
        if (err) throw err;
      }
    );
    console.log(occRecord.UID + ' occupied UID');
  } else {
    //create reserved bay
    const reservedBaysRaw = fs.readFileSync(
      '../cars-so-many-cars/src/Arrays/reservedBays.json'
    );
    const reservedBaysFile = JSON.parse(reservedBaysRaw);

    const reservedUIDRawFile = fs.readFileSync(
      '../cars-so-many-cars/src/Arrays/reservedUID.json'
    );
    const reservedUIDFinalFile = JSON.parse(reservedUIDRawFile);

    const lastresUID: number = reservedUIDFinalFile.lastID + 1;

    const reservedRecord: reservedParkingBay = new reservedParkingBay(
      lastresUID,
      res.bayUID,
      res.UID,
      res.reservationInterval
    );

    reservedBaysFile.push(reservedRecord);
    const finalReservedArr: string = JSON.stringify(reservedBaysFile, null, 2);
    fs.writeFileSync(
      '../cars-so-many-cars/src/Arrays/reservedBays.json',
      finalReservedArr,
      (err: any) => {
        if (err) throw err;
      }
    );

    const finalresUID: string = '{"lastID":' + lastresUID + '}';
    fs.writeFileSync(
      '../cars-so-many-cars/src/Arrays/reservedUID.json',
      finalresUID,
      (err: any) => {
        if (err) throw err;
      }
    );
    console.log(reservedRecord.UID + ' reserved UID');
  }
  console.log(res.UID + ' reservation UID');
  console.log(res.bayUID + ' reservation bay');
  callback(res);
}

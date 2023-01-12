import { isAfter, isWithinInterval } from 'date-fns';
import { occupiedParkingBay } from '../Classes/occupiedParkingBay';
import { reservation } from '../Classes/reservation';
import { reservedParkingBay } from '../Classes/reservedParkingBay';
import { user } from '../Classes/user';
import { setBayOccupiedStatus } from './setBayOccupiedStatus';
import { setBayReservedStatus } from './setBayReservedStatus';

export function createMassReservations(numToCreate: number) {
  const fs = require('fs');
  const add = require('date-fns/add');
  const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');
  const toDate = require('date-fns/toDate');

  const uidRawFile = fs.readFileSync(
    '../cars-so-many-cars/src/Arrays/reservationUID.json'
  );
  const uidFinalFile = JSON.parse(uidRawFile);

  const reservedUIDRawFile = fs.readFileSync(
    '../cars-so-many-cars/src/Arrays/reservedUID.json'
  );
  const reservedUIDFinalFile = JSON.parse(reservedUIDRawFile);

  const occupiedUIDRawFile = fs.readFileSync(
    '../cars-so-many-cars/src/Arrays/occupiedUID.json'
  );
  const occupiedUIDFinalFile = JSON.parse(occupiedUIDRawFile);

  const bayRawFile = fs.readFileSync(
    '../cars-so-many-cars/src/Arrays/BristolBays.json'
  );
  const bayFinalFile = JSON.parse(bayRawFile);

  const usersRawFile = fs.readFileSync(
    '../cars-so-many-cars/src/Arrays/userList.json'
  );
  const usersFinalFile = JSON.parse(usersRawFile);

  let lastUID: number = uidFinalFile.lastID;
  let lastresUID: number = reservedUIDFinalFile.lastID;
  let lastoccUID: number = occupiedUIDFinalFile.lastID;

  const reservationsArr: reservation[] = [];
  const occupiedArr: occupiedParkingBay[] = [];
  const reservedArr: reservedParkingBay[] = [];

  for (let i = 0; i < numToCreate; i++) {
    const UID: number = lastUID + 1;

    let a = Math.floor(Math.random() * 100);
    const bayUID: number = bayFinalFile[a]._UID;

    a = Math.floor(Math.random() * usersFinalFile.length);
    const record: number = a;

    const use: user = new user(
      usersFinalFile[record]._UID,
      usersFinalFile[record]._firstName,
      usersFinalFile[record]._lastName,
      usersFinalFile[record]._email,
      usersFinalFile[record]._phone,
      usersFinalFile[record]._address,
      usersFinalFile[record]._isActive,
      usersFinalFile[record]._userCreated,
      usersFinalFile[record]._userUpdated,
      usersFinalFile[record]._paymentPlan,
      usersFinalFile[record]._vehicles,
      usersFinalFile[record]._password,
      usersFinalFile[record]._reservations
    );

    const UUID: number = use.UID;

    let vehicle: string;

    if (use.vehicles.length > 1) {
      a = Math.floor(Math.random() * 2);
      vehicle = use.vehicles[a];
    } else {
      vehicle = use.vehicles[0];
    }

    a = Math.floor(Math.random() * 60);
    const b = Math.floor(Math.random() * 13);
    const c = Math.floor(Math.random() * (13 - b + 1) + b + 1);
    const resInt: Interval = {
      start: add(new Date(2023, 0, 6, 6), { days: a, hours: b }),
      end: add(new Date(2023, 0, 6, 6), { days: a, hours: c })
    }; //need to add maxes / mins}

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
    const price: number = 5 - (5 * discount) / 100;

    const res: reservation = new reservation(
      UID,
      bayUID,
      UUID,
      vehicle,
      resInt,
      resCreate,
      resUpdate,
      discount,
      price
    );

    let resConflict = false;
    for (let i = 0; i < reservationsArr.length; i++) {
      if (res.bayUID == reservationsArr[i].bayUID) {
        if (
          areIntervalsOverlapping(
            res.reservationInterval,
            reservationsArr[i].reservationInterval
          )
        ) {
          resConflict = true;
        }
      } else {
        if (res.vehicle == reservationsArr[i].vehicle) {
          if (
            areIntervalsOverlapping(
              res.reservationInterval,
              reservationsArr[i].reservationInterval
            )
          ) {
            resConflict = true;
          }
        }
      }
    }

    if (!resConflict) {
      reservationsArr.push(res);
      use.reservations.push(res.UID);
      usersFinalFile.splice(record, 1, use);
      lastUID = UID;

      if (isWithinInterval(new Date(), res.reservationInterval)) {
        const newOccupiedBay = setBayOccupiedStatus(res, lastoccUID);
        lastoccUID = lastoccUID + 1;
        occupiedArr.push(newOccupiedBay);
      } else if (isAfter(toDate(res.reservationInterval.start), new Date())) {
        const newReservedBay = setBayReservedStatus(res, lastresUID);
        lastresUID = lastresUID + 1;
        reservedArr.push(newReservedBay);
      }
    }
  }

  //console.log(reservationsArr); //write to file here
  const finalReservationsArr: string = JSON.stringify(reservationsArr, null, 2);
  fs.writeFileSync(
    '../cars-so-many-cars/src/Arrays/reservations.json',
    finalReservationsArr,
    (err: any) => {
      if (err) throw err;
    }
  );

  //console.log(occupiedArr);
  const finalOccupiedArr: string = JSON.stringify(occupiedArr, null, 2);
  fs.writeFileSync(
    '../cars-so-many-cars/src/Arrays/occupiedBays.json',
    finalOccupiedArr,
    (err: any) => {
      if (err) throw err;
    }
  );

  //console.log(reservedArr);
  const finalReservedArr: string = JSON.stringify(reservedArr, null, 2);
  fs.writeFileSync(
    '../cars-so-many-cars/src/Arrays/reservedBays.json',
    finalReservedArr,
    (err: any) => {
      if (err) throw err;
    }
  );

  const finalUserList: string = JSON.stringify(usersFinalFile, null, 2);
  fs.writeFileSync(
    '../cars-so-many-cars/src/Arrays/userList.json',
    finalUserList,
    (err: any) => {
      if (err) throw err;
    }
  );

  //assign UIDs into UID files
  const finalUID: string = '{"lastID":' + lastUID + '}';
  fs.writeFileSync(
    '../cars-so-many-cars/src/Arrays/reservationUID.json',
    finalUID,
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

  const finaloccUID: string = '{"lastID":' + lastoccUID + '}';
  fs.writeFileSync(
    '../cars-so-many-cars/src/Arrays/occupiedUID.json',
    finaloccUID,
    (err: any) => {
      if (err) throw err;
    }
  );
}

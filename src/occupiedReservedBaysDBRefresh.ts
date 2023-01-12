import { occupiedParkingBay } from './Classes/occupiedParkingBay';
import { reservedParkingBay } from './Classes/reservedParkingBay';

export function occupiedReservedBaysDBRefresh() {
  const fs = require('fs');
  const isPast = require('date-fns/isPast');
  const isFuture = require('date-fns/isFuture');
  const parseISO = require('date-fns/parseISO');

  const occupiedBaysRaw = fs.readFileSync(
    '../cars-so-many-cars/src/Arrays/occupiedBays.json'
  );
  const occupiedBaysFile = JSON.parse(occupiedBaysRaw);

  const occupiedUIDRawFile = fs.readFileSync(
    '../cars-so-many-cars/src/Arrays/occupiedUID.json'
  );
  const occupiedUIDFinalFile = JSON.parse(occupiedUIDRawFile);

  let lastoccUID: number = occupiedUIDFinalFile.lastID;

  const reservedBaysRaw = fs.readFileSync(
    '../cars-so-many-cars/src/Arrays/reservedBays.json'
  );
  const reservedBaysFile = JSON.parse(reservedBaysRaw);

  for (let i = 0; i < occupiedBaysFile.length; i++) {
    const occRecord: occupiedParkingBay = new occupiedParkingBay(
      occupiedBaysFile[i]._UID,
      occupiedBaysFile[i]._bayUID,
      occupiedBaysFile[i]._reservationUID,
      occupiedBaysFile[i]._occupationEndDateTime
    );
    const converted: Date = parseISO(occRecord.occupationEndDateTime);
    if (isPast(converted)) {
      occupiedBaysFile.splice(i, 1);
      i = i - 1;
    }
  }

  for (let i = 0; i < reservedBaysFile.length; i++) {
    const resRecord: reservedParkingBay = new reservedParkingBay(
      reservedBaysFile[i]._UID,
      reservedBaysFile[i]._bayUID,
      reservedBaysFile[i]._reservationUID,
      reservedBaysFile[i]._reservedInterval
    );
    const endConverted: Date = parseISO(resRecord.reservedInterval.end);
    if (isPast(endConverted)) {
      reservedBaysFile.splice(i, 1);
    }
    const startConverted: Date = parseISO(resRecord.reservedInterval.start);
    if (!isFuture(startConverted)) {
      if (isFuture(endConverted)) {
        const UID = lastoccUID + 1;
        const bayUID = resRecord.bayUID;
        const resUID = resRecord.reservationUID;
        const occEnd = endConverted;

        const newOccRecord: occupiedParkingBay = new occupiedParkingBay(
          UID,
          bayUID,
          resUID,
          occEnd
        );

        occupiedBaysFile.push(newOccRecord);
        reservedBaysFile.splice(i, 1);
        i = i - 1;
        lastoccUID = UID;
      }
    }
  }
  const finalOccupiedArr: string = JSON.stringify(occupiedBaysFile, null, 2);
  const finalReservedArr: string = JSON.stringify(reservedBaysFile, null, 2);

  fs.writeFileSync(
    '../cars-so-many-cars/src/Arrays/occupiedBays.json',
    finalOccupiedArr,
    (err: any) => {
      if (err) throw err;
    }
  );
  fs.writeFileSync(
    '../cars-so-many-cars/src/Arrays/reservedBays.json',
    finalReservedArr,
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

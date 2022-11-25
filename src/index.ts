import { ParkingSpot } from './Classes/ParkingSpotClass';
import { vehicle } from './Classes/vehicleInterface';
import { carInSpot } from './app';
import { CreateArrays } from './arrays';
import { findSpotInfo } from './findSpotInfo';
import { VehicleType } from './enums/vehicleType';
import { Car } from './Classes/Car';

const [spots, reserve, occupy, occupyingCar, owns] = CreateArrays();

const specSpot = 'A9';

const [resStatus, occStatus, occCar, owner] = findSpotInfo(
  specSpot,
  spots,
  reserve,
  occupy,
  occupyingCar,
  owns
);

export const clientVeh = new Car(
  //VehicleType.Car,
  occCar,
  'F6',
  'WV60 SXX',
  owner,
  true,
  "red",
  2000,
  2000,
  2000
); //type,make,model,reg,owner,electric

const pSpot = new ParkingSpot(specSpot, resStatus, occStatus, clientVeh, true);

const [own, make] = carInSpot(pSpot);

if (pSpot.occupiedStatus == true) {
  console.log(
    'Space ' + pSpot.ID + ' is currently occupied by ' + own + "'s " + make
  );
} else {
  console.log('Space ' + pSpot.ID + ' is currently vacant');
}
// Feed in car types and check that the inheritance between Vehicle and Car works
// Move Create Arrays out of start up
// Get create arrays to write to memory
//  - write an array to a csv
//  - read in from csv
//  - create a file in a place
//    - tell program to create me carpark.csv
//  - write to that file after it's been created
// Create other vehicle classes
// Changing parking spot to interface
// Create other parking spot classes
// Look up data structures
// Clean up my index.ts file
// Start methods for reservations etc...
//  - Date/Time start finish
//  - Look into JSUnit for testing
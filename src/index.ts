import { ParkingSpot } from './Classes/ParkingSpotClass';
import { vehicle } from './Classes/vehicleInterface';
import { carInSpot } from './app';
import { CreateArrays } from './arrays';
import { findSpotInfo } from './findSpotInfo';
import { VehicleType } from './enums/vehicleType';
import { Car } from './Classes/Car';

const [spots, reserve, occupy, occupyingCar, owns] = CreateArrays(); //Call CreateArrays and return the created arrays

const specSpot = 'A9'; //Spot hard-coded as A9 - gets fed into findSpotInfo below

const [resStatus, occStatus, occCar, owner] = findSpotInfo( //call findSpotInfo to get the reservation status, occupied status, occupying car, and car owner
  specSpot,
  spots,
  reserve,
  occupy,
  occupyingCar,
  owns
);// wonder if I can replace this by just pulling from the class once constructed - need to test once Spot Class is created

export const clientVeh = new Car( //initialises the Car - pulls in the occupying car make and owner from findSpotInfo
  //VehicleType.Car,
  occCar, //from findSpotInfo
  'F6',
  'WV60 SXX',
  owner, //from findSpotInfo
  true,
  "red",
  2000,
  2000,
  2000
); //type,make,model,reg,owner,electric

const pSpot = new ParkingSpot(specSpot, resStatus, occStatus, clientVeh, true); //initialise a new parking spot, pull in the specific spot, reservation status, occupied status, and the vehicle
//specSpot is hard coded line 11, reservation status is returned from findSpotInfo with occupied status, pulls in all details of the vehicle from clientVeh
const [own, make] = carInSpot(pSpot); //get the owner and make of the car in the spot - duplication?

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
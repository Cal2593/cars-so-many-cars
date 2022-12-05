"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stanUnoccDirector_1 = __importDefault(require("./Classes/stanUnoccDirector"));
//export const NeedArrays = "no";
//createSpots();
//console.log("arrays created");
const SpotTypeSearch = "Standard";
const SpotLocationSearch = "Bristol";
const StandardFound = stanUnoccDirector_1.default.construct();
if ((StandardFound === null || StandardFound === void 0 ? void 0 : StandardFound.ID) != undefined) {
    console.log(StandardFound);
}
else {
    console.log("I'm sorry, no spot has been found matching your criteria");
}
const specSpot = 'A9'; //Spot hard-coded as A9 - gets fed into findSpotInfo below
// Someone says I want A10
// Class that handles reservation requests takes that
//    - takes spot number(if applicable) / start date-time / end date-time / type of spot requested (if applicable) / car info (if applicable) / name of requester
// Hit db for info on A10 (create db access class so there's one point of entry for db)
// db access class grabs data and creates parking spot object (new Parking Spot)
// ParkingSpot class could then be returned back
// db access class
//    - only job is to hit the db and return info
//    - can return an array of created class objects
//    - return it as a vehicle interface
//    - pass it to a create a vehicle type identifier class which casts to the correct type of vehicle class
//          - look up creating a builder class which would create the car/lorry etc. object for me and check that everything is how it should be
// use a for each loop to go through an array of created spot objects
/*const [resStatus, occStatus, occCar, owner] = findSpotInfo( //call findSpotInfo to get the reservation status, occupied status, occupying car, and car owner
  specSpot, // needs to pull from class not from database
  spots,
  reserve,
  occupy,
  occupyingCar,
  owns
);*/ // wonder if I can replace this by just pulling from the class once constructed - need to test once Spot Class is created
/*export const clientVeh = new Car( //initialises the Car - pulls in the occupying car make and owner from findSpotInfo
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
// create car then write it to database so it isn't overwritten
// to pull back from the database, put it back into a new Car const

const pSpot = new standardParkingSpot(specSpot, resStatus, occStatus, clientVeh, true,true,true,"Clevedon",5000,2500,2500,2.99); //initialise a new parking spot, pull in the specific spot, reservation status, occupied status, and the vehicle
//specSpot is hard coded line 11, reservation status is returned from findSpotInfo with occupied status, pulls in all details of the vehicle from clientVeh
const [own, make] = carInSpot(pSpot); //get the owner and make of the car in the spot - duplication?

if (pSpot.occupiedStatus == true) {
  console.log(
    'Space ' + pSpot.ID + ' is currently occupied by ' + own + "'s " + make
  );
} else {
  console.log('Space ' + pSpot.ID + ' is currently vacant');
}*/
// Feed in car types and check that the inheritance between Vehicle and Car works
// Move Create Arrays out of start up
// Get create arrays to write to memory - done
//  - write an array to a csv - done
//  - read in from csv - done
//  - create a file in a place -done
//    - tell program to create me carpark.csv - done
//  - write to that file after it's been created
// Create other vehicle classes - Done
// Changing parking spot to interface - done
// Create other parking spot classes
// Look up data structures
// Clean up my index.ts file
// Start methods for reservations etc...
//  - Date/Time start finish
//  - Look into JSUnit for testing

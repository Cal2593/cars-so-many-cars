"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createBays_1 = require("./Arrays/createBays");
const stanUnoccDirector_1 = __importDefault(require("./Classes/stanUnoccDirector"));
const UserReservationRequest_1 = require("./Classes/UserReservationRequest");
const reservationCheck_1 = require("./reservationCheck");
const scraper_1 = require("./scraper");
const cleanser_1 = require("./cleanser");
const createMassReservations_1 = require("./Arrays/createMassReservations");
let interaction = "Create Mass";
if (interaction == "Data Creation") {
    /*****Data Creation*****/
    (0, createBays_1.createBays)('Gloucester');
}
else if (interaction == "Bay Search") {
    //*****Request comes in*****/
    const userID = 1; // add this into class - also create new user class
    //const vehicleReg: string = 'WF58 YAX'; // Skoda Fabia
    //const vehicleReg: string = 'WJ21 MGZ'; //Mum's hybrid toyota
    const vehicleReg = 'WJ55 CXZ'; //Diesel white fiat motorhome
    //const vehicleReg: string = 'LB69 VRE'; // Tesla Car
    //const vehicleReg: string = 'M4 OUW'; // Petrol BMW Car
    //const vehicleReg: string = 'WV13 UJO'; // Diesel Renault (think this is a van)
    //const vehicleReg: string = 'N530 EJC'; // Becky's Nissan SORN
    //const vehicleReg: string = 'S694 SAD'; // Vehicle not found
    //const vehicleReg: string = 'M326 MHM'; // Land rover 404
    //const vehicleReg: string = 'LP10 CXH'; // Diesel Citroen (think this is a van)
    //const vehicleReg: string = 'WV60 SXX'; // Honda CBF (SORN)
    //const vehicleReg: string = 'LP156 IOU'; // Too long registration
    const resStart = new Date(2022, 12, 7, 12, 0, 0, 0);
    const resEnd = new Date(2022, 12, 7, 14, 0, 0, 0);
    const elecRequired = false;
    const covRequired = false;
    const valRequired = false;
    const accRequired = false;
    const SpecificLocationSearch = 'Bristol';
    //*****Request is processed*****/
    const reservationRequest = new UserReservationRequest_1.UserReservationRequest(userID, vehicleReg, resStart, resEnd, elecRequired, covRequired, valRequired, accRequired, SpecificLocationSearch);
    (0, reservationCheck_1.reservationCheck)(reservationRequest, (data) => {
        console.log(data);
    });
    //refresh db
    //Search for available Bay here.
    //*****Director is selected*****/
    const StandardFound = stanUnoccDirector_1.default.construct(); //replace this
    //Return found bay to user - ask if they want to reserve it
}
else if (interaction == "Reserve Bay") {
    //Add reservation into db
    //refresh db
}
else if (interaction == "New User") {
    //new user creation
    //check if user already exists in db
    //if they do, return to user saying user already exists
    //if not, create user
    //refresh db
}
else if (interaction == "Amend User") {
    //refresh db
    //find user
    //return to user for amendment requests
    //make amendments
}
else if (interaction == "Delete User") {
    //refresh db
    //delete user
}
else if (interaction == "Amend Reservation") {
    //refresh db
    //find reservation
    //return to user for amendment requests
    //amend reservation
}
else if (interaction == "Cancel Reservation") {
    //refresh db
    //find reservation
    //return to user for cancellation request
    //check if user wants to reschedule before confirming cancellation
    //cancel reservation
}
else if (interaction == "Find my own bay") {
    //refresh db
    //display available bays
}
else if (interaction == "Scrape") {
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            (0, scraper_1.scraper)();
        }, 500);
    }
}
else if (interaction == "Cleanse") {
    (0, cleanser_1.cleanser)();
}
else if (interaction == "Create Mass") {
    (0, createMassReservations_1.createMassReservations)(5);
}
;
//*****Request sent back to user*****/
/*if (StandardFound?.ID != undefined) {
  console.log(StandardFound);
} else {
  console.log("I'm sorry, no spot has been found matching your criteria");
}*/
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

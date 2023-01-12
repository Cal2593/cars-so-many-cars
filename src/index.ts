import { createBays } from './Mass Data Creation/createBays';
import { searchableUserReservationRequest } from './Classes/searchableUserReservationRequest';
import { UserReservationRequest } from './Classes/UserReservationRequest';
import { reservationCheck } from './reservationCheck';
import { scraper } from './Mass Data Creation/scraper';
import { cleanser } from './Mass Data Creation/cleanser';
import { createMassReservations } from './Mass Data Creation/createMassReservations';
import { createUsers } from './Mass Data Creation/createUsers';
import { add } from 'date-fns';
import { baySearch } from './baySearch';
import { occupiedReservedBaysDBRefresh } from './occupiedReservedBaysDBRefresh';

const interaction:string = 'Bay Search';

if (interaction == 'Data Creation') {
  /*****Data Creation*****/
  createBays('Gloucester');
} else if (interaction == 'Bay Search') {
  //*****Request comes in*****/
  //Step 1
  //Check user exists, if not, create user

  const userID = 1; // add this into class - also create new user class
  //const vehicleReg: string = 'WF58 YAX'; // Skoda Fabia
  const vehicleReg = 'WJ21 MGZ'; //Mum's hybrid toyota
  //const vehicleReg = 'WJ55 CXZ'; //Diesel white fiat motorhome
  //const vehicleReg: string = 'LB69 VRE'; // Tesla Car
  //const vehicleReg: string = 'M4 OUW'; // Petrol BMW Car
  //const vehicleReg: string = 'WV13 UJO'; // Diesel Renault (think this is a van)
  //const vehicleReg: string = 'N530 EJC'; // Becky's Nissan SORN
  //const vehicleReg: string = 'S694 SAD'; // Vehicle not found
  //const vehicleReg: string = 'M326 MHM'; // Land rover 404
  //const vehicleReg: string = 'LP10 CXH'; // Diesel Citroen (think this is a van)
  //const vehicleReg: string = 'WV60 SXX'; // Honda CBF (SORN)
  //const vehicleReg: string = 'LP156 IOU'; // Too long registration
  const resInt: Interval = {
    start: new Date(2023, 0, 15, 15),
    end: add(new Date(2023, 0, 15, 15), { hours: 2 })
  };
  const elecRequired = false;
  const covRequired = false;
  const valRequired = false;
  const accRequired = false;
  const SpecificLocationSearch = 'Bristol';

  //*****Request is processed*****/
  const reservationRequest: UserReservationRequest = new UserReservationRequest(
    userID,
    vehicleReg,
    resInt,
    elecRequired,
    covRequired,
    valRequired,
    accRequired,
    SpecificLocationSearch
  );
  reservationCheck(
    reservationRequest,
    (data: searchableUserReservationRequest) => {
      occupiedReservedBaysDBRefresh();
      baySearch(data);
    }
  );
} else if (interaction == 'New User') {
  //new user creation
  //check if user already exists in db
  //if they do, return to user saying user already exists
  //if not, create user
  //refresh db
} else if (interaction == 'Amend User') {
  //refresh db
  //find user
  //return to user for amendment requests
  //make amendments
} else if (interaction == 'Delete User') {
  //refresh db
  //delete user
} else if (interaction == 'Amend Reservation') {
  //refresh db
  //find reservation
  //return to user for amendment requests
  //amend reservation
} else if (interaction == 'Cancel Reservation') {
  //refresh db
  //find reservation
  //return to user for cancellation request
  //check if user wants to reschedule before confirming cancellation
  //cancel reservation
} else if (interaction == 'Find my own bay') {
  //refresh db
  //display available bays
} else if (interaction == 'Scrape') {
  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      scraper();
    }, 500);
  }
} else if (interaction == 'Cleanse') {
  cleanser();
} else if (interaction == 'Create Mass') {
  createMassReservations(1000);
} else if (interaction == 'Create Users') {
  createUsers();
}

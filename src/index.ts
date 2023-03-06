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
import { getUserFromEmail } from './getUserFromEmail';
import { createUser } from './createUser';
import { incomingReservation } from './incomingReservation';
import { baseParkingBay } from './Classes/baseParkingBay';
import axios from "axios";
import { reservation } from './Classes/reservation';
import { decodeReservation } from './decodeReservation';
import { decodedReservation } from './Classes/decodedReservation';

const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const cors = require ("cors");
const app = express();
const port = process.env.PORT;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  }),
  bodyParser.json()
);

app.post('/', (req: any ,res: any) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  console.log(req.body);
  if(req.body.type == "Reservation Request"){
    const userRes: UserReservationRequest = incomingReservation(req.body);
    reservationCheck(
      userRes,
      (data: searchableUserReservationRequest) => {
        occupiedReservedBaysDBRefresh();
        baySearch(
          data,
          (foundStatus: reservation) => {
            decodeReservation(
              foundStatus,
              (returnData: decodedReservation) => {
                res.send(returnData);
            });
          });
      }
    )
  }else{
    res.send('Received');
  }
});

app.listen(port, () => {
  console.log('[server]: Server is running at http://localhost:8000');
})

const interaction:string = 'Testing';

if (interaction == 'Data Creation') {
  /*****Data Creation*****/
  createBays('Gloucester');
} else if (interaction == 'Bay Search') {
  //*****Request comes in*****/

  const email: string = "frankjefferson@outlook.com"
  //const vehicleReg: string = 'WF58 YAX'; // Skoda Fabia
  //const vehicleReg: string = 'WJ21 MGZ'; //Mum's hybrid toyota
  //const vehicleReg = 'WJ55 CXZ'; //Diesel white fiat motorhome
  //const vehicleReg: string = 'LB69 VRE'; // Tesla Car
  //const vehicleReg: string = 'M4 OUW'; // Petrol BMW Car
  //const vehicleReg: string = 'WV13 UJO'; // Diesel Renault (think this is a van)
  //const vehicleReg: string = 'N530 EJC'; // Becky's Nissan SORN
  //const vehicleReg: string = 'S694 SAD'; // Vehicle not found
  //const vehicleReg: string = 'M326 MHM'; // Land rover 404
  const vehicleReg: string = 'LP10 CXH'; // Diesel Citroen (think this is a van)
  //const vehicleReg: string = 'WV60 SXX'; // Honda CBF (SORN)
  //const vehicleReg: string = 'LP156 IOU'; // Too long registration
  
  const userID: number = getUserFromEmail(email,vehicleReg)!;

  const resInt: Interval = {
    start: new Date(2023, 0, 20, 11),
    end: add(new Date(2023, 0, 20, 11), { hours: 4 })
  };
  const elecRequired: boolean = false;
  const covRequired: boolean = false;
  const valRequired: boolean = false;
  const accRequired: boolean = false;
  const SpecificLocationSearch: string = 'Bristol';

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
  // reservationCheck(
  //   reservationRequest,
  //   (data: searchableUserReservationRequest) => {
  //     occupiedReservedBaysDBRefresh();
  //     baySearch(data);
  //   }
  // );
} else if (interaction == 'New User') {
  const email: string = "frankjefferson@outlook.com"
  const vehicleReg: string = 'LP10 CXH'; // Diesel Citroen (think this is a van)
  const userID: number = createUser(email,vehicleReg);
  console.log(userID);

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

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createBays_1 = require("./Mass Data Creation/createBays");
const UserReservationRequest_1 = require("./Classes/UserReservationRequest");
const reservationCheck_1 = require("./reservationCheck");
const scraper_1 = require("./Mass Data Creation/scraper");
const cleanser_1 = require("./Mass Data Creation/cleanser");
const createMassReservations_1 = require("./Mass Data Creation/createMassReservations");
const createUsers_1 = require("./Mass Data Creation/createUsers");
const date_fns_1 = require("date-fns");
const baySearch_1 = require("./baySearch");
const occupiedReservedBaysDBRefresh_1 = require("./occupiedReservedBaysDBRefresh");
const getUserFromEmail_1 = require("./getUserFromEmail");
const createUser_1 = require("./createUser");
const incomingReservation_1 = require("./incomingReservation");
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const cors = require("cors");
const app = express();
const port = process.env.PORT;
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}), bodyParser.json());
app.post('/', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    const userRes = (0, incomingReservation_1.incomingReservation)(req.body);
    console.log("Back in index: " + userRes);
    res.send('Received');
});
app.listen(port, () => {
    console.log('[server]: Server is running at http://localhost:8000');
});
const interaction = 'Testing';
if (interaction == 'Data Creation') {
    /*****Data Creation*****/
    (0, createBays_1.createBays)('Gloucester');
}
else if (interaction == 'Bay Search') {
    //*****Request comes in*****/
    const email = "frankjefferson@outlook.com";
    //const vehicleReg: string = 'WF58 YAX'; // Skoda Fabia
    //const vehicleReg: string = 'WJ21 MGZ'; //Mum's hybrid toyota
    //const vehicleReg = 'WJ55 CXZ'; //Diesel white fiat motorhome
    //const vehicleReg: string = 'LB69 VRE'; // Tesla Car
    //const vehicleReg: string = 'M4 OUW'; // Petrol BMW Car
    //const vehicleReg: string = 'WV13 UJO'; // Diesel Renault (think this is a van)
    //const vehicleReg: string = 'N530 EJC'; // Becky's Nissan SORN
    //const vehicleReg: string = 'S694 SAD'; // Vehicle not found
    //const vehicleReg: string = 'M326 MHM'; // Land rover 404
    const vehicleReg = 'LP10 CXH'; // Diesel Citroen (think this is a van)
    //const vehicleReg: string = 'WV60 SXX'; // Honda CBF (SORN)
    //const vehicleReg: string = 'LP156 IOU'; // Too long registration
    const userID = (0, getUserFromEmail_1.getUserFromEmail)(email, vehicleReg);
    const resInt = {
        start: new Date(2023, 0, 20, 11),
        end: (0, date_fns_1.add)(new Date(2023, 0, 20, 11), { hours: 4 })
    };
    const elecRequired = false;
    const covRequired = false;
    const valRequired = false;
    const accRequired = false;
    const SpecificLocationSearch = 'Bristol';
    //*****Request is processed*****/
    const reservationRequest = new UserReservationRequest_1.UserReservationRequest(userID, vehicleReg, resInt, elecRequired, covRequired, valRequired, accRequired, SpecificLocationSearch);
    (0, reservationCheck_1.reservationCheck)(reservationRequest, (data) => {
        (0, occupiedReservedBaysDBRefresh_1.occupiedReservedBaysDBRefresh)();
        (0, baySearch_1.baySearch)(data);
    });
}
else if (interaction == 'New User') {
    const email = "frankjefferson@outlook.com";
    const vehicleReg = 'LP10 CXH'; // Diesel Citroen (think this is a van)
    const userID = (0, createUser_1.createUser)(email, vehicleReg);
    console.log(userID);
}
else if (interaction == 'Amend User') {
    //refresh db
    //find user
    //return to user for amendment requests
    //make amendments
}
else if (interaction == 'Delete User') {
    //refresh db
    //delete user
}
else if (interaction == 'Amend Reservation') {
    //refresh db
    //find reservation
    //return to user for amendment requests
    //amend reservation
}
else if (interaction == 'Cancel Reservation') {
    //refresh db
    //find reservation
    //return to user for cancellation request
    //check if user wants to reschedule before confirming cancellation
    //cancel reservation
}
else if (interaction == 'Find my own bay') {
    //refresh db
    //display available bays
}
else if (interaction == 'Scrape') {
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            (0, scraper_1.scraper)();
        }, 500);
    }
}
else if (interaction == 'Cleanse') {
    (0, cleanser_1.cleanser)();
}
else if (interaction == 'Create Mass') {
    (0, createMassReservations_1.createMassReservations)(1000);
}
else if (interaction == 'Create Users') {
    (0, createUsers_1.createUsers)();
}

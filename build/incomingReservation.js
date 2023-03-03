"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.incomingReservation = void 0;
const date_fns_1 = require("date-fns");
const UserReservationRequest_1 = require("./Classes/UserReservationRequest");
function incomingReservation(values) {
    const userID = 1; //change this
    const location = values.location;
    const startHour = +values.starttime;
    const startMinutes = +values.startminutes;
    const endHour = +values.endtime;
    const endMinutes = +values.endminutes;
    const vehicleRegistration = values.vehicleregistration;
    let electricCharging;
    let covered;
    let valet;
    let accessible;
    if (values.electricCharging) {
        electricCharging = true;
    }
    else {
        electricCharging = false;
    }
    if (values.covered) {
        covered = true;
    }
    else {
        covered = false;
    }
    if (values.valet) {
        valet = true;
    }
    else {
        valet = false;
    }
    if (values.accessible) {
        accessible = true;
    }
    else {
        accessible = false;
    }
    const date = (0, date_fns_1.parseISO)(values.date);
    const interval = {
        start: (0, date_fns_1.add)(date, { hours: startHour, minutes: startMinutes }),
        end: (0, date_fns_1.add)(date, { hours: endHour, minutes: endMinutes })
    };
    const userRes = new UserReservationRequest_1.UserReservationRequest(userID, vehicleRegistration, interval, electricCharging, covered, valet, accessible, location);
    console.log(userRes);
    return userRes;
}
exports.incomingReservation = incomingReservation;

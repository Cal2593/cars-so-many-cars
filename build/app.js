"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carInSpot = exports.isOccupied = void 0;
const _1 = require(".");
function isOccupied(pSpot) {
    let status = "";
    if (pSpot.occupiedStatus == true) {
        status = "occupied";
    }
    else {
        status = "vacant";
    }
    return status;
}
exports.isOccupied = isOccupied;
function carInSpot(pSpot) {
    let own;
    if (pSpot.occupiedStatus == true) {
        own = _1.clientCar.owner;
    }
    return own;
}
exports.carInSpot = carInSpot;

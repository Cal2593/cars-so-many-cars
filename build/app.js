"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carInSpot = void 0;
//import { Car } from "./CarClass";
const _1 = require(".");
function carInSpot(pSpot) {
    let own;
    let make;
    if (pSpot.occupiedStatus == true) {
        own = _1.clientVeh.owner;
        make = _1.clientVeh.make;
    }
    return [own, make];
}
exports.carInSpot = carInSpot;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOccupying = void 0;
const carMap_1 = require("../Maps/carMap");
function createOccupying(occupy) {
    const occupyingCar = new Array(30);
    for (let i = 0; i <= 29; i++) {
        if (occupy[i] == true) {
            let bool = Math.floor(Math.random() * 12);
            occupyingCar[i] = carMap_1.carMap.get(bool);
        }
    }
    return occupyingCar;
}
exports.createOccupying = createOccupying;

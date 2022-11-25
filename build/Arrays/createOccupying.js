"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOccupying = void 0;
const vehMap_1 = require("../Maps/vehMap");
function createOccupying(occupy) {
    const occupyingCar = new Array(30);
    for (let i = 0; i <= 29; i++) {
        if (occupy[i] == true) {
            const a = Math.floor(Math.random() * 12);
            occupyingCar[i] = vehMap_1.vehMap.get(a);
        }
    }
    return occupyingCar;
}
exports.createOccupying = createOccupying;

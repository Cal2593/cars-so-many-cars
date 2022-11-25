"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReserved = void 0;
function createReserved() {
    const reserve = new Array(30);
    for (let i = 0; i <= 29; i++) {
        const bool = Math.floor(Math.random() * 2);
        if (bool == 1) {
            reserve[i] = true;
        }
        else {
            reserve[i] = false;
        }
    }
    return reserve;
}
exports.createReserved = createReserved;

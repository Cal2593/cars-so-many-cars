"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOwners = void 0;
const userMap_1 = require("../Maps/userMap");
function createOwners(occupy) {
    const owns = new Array(30);
    let used = new Array(30);
    for (let i = 0; i <= 29; i++) {
        if (occupy[i] == true) {
            let count = 0;
            while (count == 0) {
                let bool = Math.floor(Math.random() * 30);
                let proposed = userMap_1.UserMap.get(bool);
                if (used.includes(proposed)) {
                    count = 0;
                }
                else {
                    count = 1;
                    owns[i] = proposed;
                    used.push(proposed);
                }
            }
        }
    }
    return owns;
}
exports.createOwners = createOwners;

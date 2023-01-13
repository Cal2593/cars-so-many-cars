"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanser = void 0;
function cleanser() {
    const fs = require('fs');
    const rawData = fs.readFileSync('singleReg.json');
    const finalData = JSON.parse(rawData);
    const listToWrite = [];
    for (let i = 0; i <= finalData.length - 1; i++) {
        const num = finalData[i].registrationNumber;
        listToWrite.push('"' + num + '"');
    }
    const finalListToWrite = listToWrite.toString();
    fs.writeFileSync('regs.json', finalListToWrite, (err) => {
        if (err)
            throw err;
    });
}
exports.cleanser = cleanser;

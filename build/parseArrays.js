"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseArrays = void 0;
function parseArrays() {
    const fs = require('fs');
    let rawFile = fs.readFileSync('arrays.json');
    let parsed = JSON.parse(rawFile);
    console.log(parsed);
}
exports.parseArrays = parseArrays;

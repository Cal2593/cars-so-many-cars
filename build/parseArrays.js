"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseArrays = void 0;
function parseArrays() {
    const fs = require('fs');
    let rawFile = fs.readFileSync('arrays.json');
    const parsed = JSON.parse(rawFile);
    return parsed;
}
exports.parseArrays = parseArrays;

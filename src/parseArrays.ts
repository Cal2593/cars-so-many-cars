export function parseArrays(){
    const fs = require('fs');

    let rawFile = fs.readFileSync('arrays.json');
    const parsed = JSON.parse(rawFile);
    return parsed;
}
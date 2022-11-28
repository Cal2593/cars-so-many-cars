export function parseArrays(){
    const fs = require('fs');

    let rawFile = fs.readFileSync('arrays.json');
    let parsed = JSON.parse(rawFile);
    console.log(parsed);
}
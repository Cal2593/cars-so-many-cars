"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBays = void 0;
const baseParkingBay_1 = require("../Classes/baseParkingBay");
function createBays(SetLocation) {
    const baysArr = new Array(100);
    const fs = require('fs');
    const uidRawFile = fs.readFileSync('../cars-so-many-cars/src/Arrays/bayUID.json');
    const uidFinalFile = JSON.parse(uidRawFile);
    let lastUID = uidFinalFile.lastID;
    let letter = 0;
    let count = 0;
    for (let i = 0; i <= 99; i++) {
        const bayNum = count + 1;
        const UID = lastUID + 1;
        const ref = String.fromCharCode(65 + letter) + bayNum;
        const loc = SetLocation;
        const type = typer(SetLocation, i);
        const cov = SetCovering(SetLocation, i);
        const elec = SetElectric(SetLocation, i, type);
        const valet = SetValet(type);
        const bay = new baseParkingBay_1.baseParkingBay(UID, ref, type, loc, cov, elec, valet);
        if (count < 9) {
            count++;
        }
        else {
            count = 0;
        }
        if (count == 0) {
            letter++;
        }
        lastUID = UID;
        baysArr[i] = bay;
    }
    const creation = JSON.stringify(baysArr, null, 2);
    fs.writeFile('../cars-so-many-cars/src/Arrays/' + SetLocation + 'Bays.json', creation, (err) => {
        if (err)
            throw err;
        console.log('Data created');
    });
    const finalUID = '{"lastID":' + lastUID + '}';
    fs.writeFile('../cars-so-many-cars/src/Arrays/bayUID.json', finalUID, (err) => {
        if (err)
            throw err;
    });
}
exports.createBays = createBays;
function typer(location, i) {
    let finalType = '';
    switch (location) {
        case 'Gloucester':
            if (i <= 59) {
                finalType = 'CoachAndLorry';
            }
            else {
                finalType = 'MotorhomeAndCaravan';
            }
            break;
        case 'Yate':
            if (i <= 59) {
                finalType = 'Standard';
            }
            else if (i >= 60 && i <= 79) {
                finalType = 'Accessible';
            }
            else {
                finalType = 'MotorhomeAndCaravan';
            }
            break;
        case 'Bristol':
            if (i <= 49) {
                finalType = 'Standard';
            }
            else if (i >= 50 && i <= 69) {
                finalType = 'Accessible';
            }
            else if (i >= 70 && i <= 79) {
                finalType = 'ElectricCharging';
            }
            else if (i >= 80 && i <= 89) {
                finalType = 'Valet';
            }
            else {
                finalType = 'Motorbike';
            }
            break;
    }
    return finalType;
}
function SetCovering(location, i) {
    let finalCovering;
    switch (location) {
        case 'Gloucester':
        case 'Yate':
            finalCovering = false;
            break;
        case 'Bristol':
            if (i <= 9) {
                finalCovering = false;
            }
            else {
                finalCovering = true;
            }
            break;
        default:
            finalCovering = false;
    }
    return finalCovering;
}
function SetElectric(location, i, type) {
    let finalElectric;
    switch (location) {
        case 'Gloucester':
        case 'Yate':
            if (type == 'MotorhomeAndCaravan') {
                if (i <= 89) {
                    finalElectric = true;
                }
                else {
                    finalElectric = false;
                }
            }
            else {
                finalElectric = false;
            }
            break;
        case 'Bristol':
            if (type == 'ElectricCharging') {
                finalElectric = true;
            }
            else {
                finalElectric = false;
            }
            break;
        default:
            finalElectric = false;
    }
    return finalElectric;
}
function SetValet(type) {
    if (type == 'Valet')
        return true;
    return false;
}

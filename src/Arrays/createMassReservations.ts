import { reservation } from "../Classes/reservation";

export function createMassReservations(numToCreate:number){
    const fs = require('fs');
    let uidRawFile = fs.readFileSync('../cars-so-many-cars/src/Arrays/reservationUID.json');
    const uidFinalFile = JSON.parse(uidRawFile);

    let regRawFile = fs.readFileSync('regs.json');
    const regFinalFile = JSON.parse(regRawFile);

    let bayRawFile = fs.readFileSync('../cars-so-many-cars/src/Arrays/BristolBays.json');
    const bayFinalFile = JSON.parse(bayRawFile);

    let lastUID: number = uidFinalFile.lastID;
    let reservationsArr: reservation[] = [];
    let userUID: number = 0; //replace this to pull from db

    for(let i=0;i<numToCreate;i++){
        let UID:number = lastUID+1;

        let a = Math.floor(Math.random()*100);
        let bayUID:number = bayFinalFile[a]._UID;

        let UUID: number = userUID +1
        userUID = UUID;

        a = Math.floor(Math.floor(Math.random()*regFinalFile.length));
        let vehicle = regFinalFile[a];
    }

}
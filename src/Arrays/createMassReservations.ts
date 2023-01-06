import { reservation} from "../Classes/reservation";

export function createMassReservations(numToCreate:number){
    const fs = require('fs');
    const add = require('date-fns/add');
    const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

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

        a = Math.floor(Math.random()*regFinalFile.length);
        let vehicle: string = regFinalFile[a];

        a = Math.floor(Math.random()*60);
        let b = Math.floor(Math.random()*13);
        let c = Math.floor(Math.random()*(13-b+1)+b+1);
        let resInt: Interval = {start: add(new Date(2023,0,6,6),{days: a,hours:b}),end: add(new Date(2023,0,6,6),{days: a, hours: c})} //need to add maxes / mins}

        //a = Math.floor(Math.floor(Math.random()*12));
        //let resEnd: Date = add(resStart,{hours: a}); //add maxes / mins

        let resCreate: Date = new Date();

        let resUpdate: Date = new Date();

        let discount: number = (Math.floor(Math.random()*(10-1)+1)*10);

        let price: number = (5-(5*discount)/100);

        let res: reservation = new reservation(
            UID,
            bayUID,
            UUID,
            vehicle,
            resInt,
            //resEnd,
            resCreate,
            resUpdate,
            discount,
            price
        );

        let resConflict: boolean = false;
        for (let i = 0;i<reservationsArr.length;i++){
            if(res.bayUID == reservationsArr[i].bayUID){
                if(areIntervalsOverlapping(res.reservationInterval,reservationsArr[i].reservationInterval)){
                    resConflict = true;
                }
            }else{
                if(res.vehicle == reservationsArr[i].vehicle){
                    if(areIntervalsOverlapping(res.reservationInterval,reservationsArr[i].reservationInterval)){
                        resConflict = true;
                    }
                }
            }
        }
        if (!resConflict){
            reservationsArr.push(res);
            lastUID = UID;
        }
    }
    console.log(reservationsArr); //write to file here
    //now check if any reservations overlap with the current time
    //if so, write to occupied array, then write to file
}
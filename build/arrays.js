"use strict";
/*import { createSpots } from './Arrays/createSpots';
import { createReserved } from './Arrays/createReserved';
import { createOccupied } from './Arrays/createOccupied';
import { createOccupying } from './Arrays/createOccupying';
import { createOwners } from './Arrays/createOwners';

export function CreateArrays() {
  const spots = createSpots();
  const reserve = createReserved();
  const occupy = createOccupied();
  const occupyingCar = createOccupying(occupy);
  const owns = createOwners(occupy);
  let spotfile = JSON.stringify(spots)
  let reservefile = JSON.stringify(reserve)
  let occupyfile = JSON.stringify(occupy)
  let occCarfile = JSON.stringify(occupyingCar)
  let ownfile = JSON.stringify(owns)
  
  //let arrs:string[] = [spotfile,reservefile,occupyfile,occCarfile,ownfile];
  //let arrs2 = JSON.stringify(arrs,null,2);

  let arrs = spots;
  let arrs2 = JSON.stringify(arrs,null,2);
  

  const fs = require('fs');
  fs.writeFile('arrays.json',arrs2,(err: any) => {
    if(err) throw err;
    console.log("arrays written to file");
  })
}*/

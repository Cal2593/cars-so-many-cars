//import { Car } from "./CarClass";
import { clientVeh } from ".";

export function carInSpot(pSpot: {occupiedStatus: boolean;}){
    let own;
    let make;
    if(pSpot.occupiedStatus == true){
        own = clientVeh.owner
        make = clientVeh.make
    }
return [own, make] as const;
}
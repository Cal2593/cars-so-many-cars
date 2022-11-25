import { Car } from "./CarClass";
import { clientCar } from ".";
export function isOccupied(pSpot: { occupiedStatus: boolean; }){

let status = "";

    if(pSpot.occupiedStatus == true){
        status = "occupied";
    }else{
        status = "vacant";
    }

return status;
}

export function carInSpot(pSpot: {occupiedStatus: boolean;}){
    let own;
    if(pSpot.occupiedStatus == true){
        own = clientCar.owner
    }
return own;
}
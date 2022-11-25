//import { Car } from "./CarClass";
import { clientCar } from ".";

export function carInSpot(pSpot: {occupiedStatus: boolean;}){
    let own;
    let make;
    if(pSpot.occupiedStatus == true){
        own = clientCar.owner
        make = clientCar.make
    }
return [own, make] as const;
}
import {ParkingSpot} from './ParkingSpotClass';
import { Car } from './CarClass';
import { carInSpot } from './app';
import { CreateArrays } from './arrays';
import { findSpotInfo } from './findSpotInfo';

const [spots, reserve, occupy, occupyingCar, owns] = CreateArrays();

const specSpot = "A9";

const [resStatus,occStatus,occCar,owner] = findSpotInfo(specSpot,spots,reserve,occupy,occupyingCar,owns)

export const clientCar = new Car(occCar,"F6","WV60 SXX",owner,true);
const pSpot = new ParkingSpot(specSpot,resStatus,occStatus,clientCar,true);

const [own, make] = carInSpot(pSpot);

if(pSpot.occupiedStatus==true){
    console.log("Space "+ pSpot.ID +" is currently occupied by "+ own +"'s "+ make);
}else{
    console.log("Space "+ pSpot.ID +" is currently vacant");
}
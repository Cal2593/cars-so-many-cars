import {ParkingSpot} from './ParkingSpotClass';
import { vehicle } from './vehicleClass';
import { carInSpot } from './app';
import { CreateArrays } from './arrays';
import { findSpotInfo } from './findSpotInfo';
console.log(CreateArrays());
const [spots, reserve, occupy, occupyingCar, owns] = CreateArrays();

const specSpot = "A9";

const [resStatus,occStatus,occCar,owner] = findSpotInfo(specSpot,spots,reserve,occupy,occupyingCar,owns)

export const clientVeh = new vehicle("Car",occCar,"F6","WV60 SXX",owner,true);//type,make,model,reg,owner,electric

const pSpot = new ParkingSpot(specSpot,resStatus,occStatus,clientVeh,true);

const [own, make] = carInSpot(pSpot);

if(pSpot.occupiedStatus==true){
    console.log("Space "+ pSpot.ID +" is currently occupied by "+ own +"'s "+ make);
}else{
    console.log("Space "+ pSpot.ID +" is currently vacant");
}
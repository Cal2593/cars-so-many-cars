import {ParkingSpot} from './ParkingSpotClass';
import { Car } from './CarClass';
import { carInSpot } from './app';
import { CreateArrays } from './arrays';

CreateArrays();
console.log(CreateArrays())
export const clientCar = new Car("Renault","F6","WV60 SXX","Callum Davidson",true);
const pSpot = new ParkingSpot("b1",true,true,clientCar,true);

const [own, make] = carInSpot(pSpot);

if(pSpot.occupiedStatus==true){
    console.log("Space "+ pSpot.ID +" is currently occupied by "+ own +"'s "+ make);
}else{
    console.log("Space "+ pSpot.ID +" is currently vacant");
}
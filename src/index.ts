import {ParkingSpot} from './ParkingSpotClass';
import { Car } from './CarClass';
import { carInSpot, isOccupied } from './app';

export const clientCar = new Car("Renault","F6","WV60 SXX","Callum Davidson");
const pSpot = new ParkingSpot("b1",true,true,clientCar,true);

const status = isOccupied(pSpot);
const owner = carInSpot(pSpot);

console.log("Space "+ pSpot.ID +" is currently "+status+" by "+ owner +"'s car");

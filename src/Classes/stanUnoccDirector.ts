import { ParkingSpotType } from "../enums/parkingSpotType";
import { parseArrays } from "../parseArrays";
import Spot from "./spot";
import { SpotBuilder } from "./SpotBuilder";

export default class StandardUnoccupiedSpotDirector {
    static construct(): Spot {
        const data = parseArrays()
        console.log(data)
        console.log("parsing complete")
        let found = 0;
        for (let i = 0;found == 0;i++){
            if(data[i].occupied == false){
                var spotFound = data[i].id;
                found = 1;
            }
        }
        return new SpotBuilder()
            .setID(spotFound)
            .setSpotType(ParkingSpotType.Standard)
            .setReservedStatus(false)
            .setOccupiedStatus(false)
            .setLocation("Bristol")
            .setBasePrice(2)
            .getResult()
    }
}
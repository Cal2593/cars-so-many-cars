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
            .setSpotType(ParkingSpotType.Standard) //error on enum is either in the builder or the spot
            .setReservedStatus(false)
            .setOccupiedStatus(false)
            .setLocation("Bristol")
            .setBasePrice(2)
            .getResult()
    }
}
/*To do
    Get this director working properly (i.e. not printing out the spot enum)
    Create other directors for the list in the enum + valet
    Build out the array creation to have the other relevant details
    Get everything pulling in via various directors and printing out
    Set it up so that this info pulls in and then I can set a reservation into a spot
*/
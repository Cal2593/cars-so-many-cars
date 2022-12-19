import { RegistrationAPICall } from "./RegistrationAPICall";
const fs = require('fs');

export function getVehicleData(/*vehicleRegistrationForSearch: string*/){
        //RegistrationAPICall(vehicleRegistrationForSearch);
        const rawUserData = fs.readFileSync('userReg.json');
        const finalUserData = JSON.parse(rawUserData);

        let electricFuel: boolean;
        if(finalUserData.fuelType == "ELECTRICITY"){
            electricFuel = true;
        }else{
            electricFuel = false;
        }

        let vehicleType: string;
        switch(finalUserData.wheelplan){
            case "2 AXLE RIGID BODY":
                vehicleType = "Car";
                break;
            case "3 WHEEL":
                vehicleType = "Tricycle";
                break;
            case "2 WHEEL":
                vehicleType = "Motorbike";
                break;
            case "3 AXLE RIGID BODY":
                vehicleType = "Motorhome/Caravan";
                break;
            case "MULTI-AXLE RIGID":
            case "2 AXLE & ARTIC":
            case "3 AXLE & ARTIC":
            case "MULTI-AXLE & ARTIC":
            case "CRAWLER NON-STANDARD":
                vehicleType = "Lorry";
                break;
            default:
                vehicleType = "Unknown";
                break;
        }

        const vehicleColour: string = finalUserData.colour;
        const vehicleMake: string = finalUserData.make;

        const vehicleData: (string | boolean)[] = [vehicleMake,vehicleColour,vehicleType,electricFuel];
    return vehicleData;
}
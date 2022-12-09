const fs = require('fs');

export function getVehicleData(){
        const rawUserData = fs.readFileSync('userReg.json');
        const firstparse = JSON.parse(rawUserData);
        const finalUserData = JSON.parse(firstparse);

        let electricFuel: boolean;
        if(finalUserData.fuelType == "ELECTRICITY"){
            electricFuel = true;
        }else{
            electricFuel = false;
        }

        let vehicleType: string;
        if(finalUserData.wheelplan == "2 AXLE RIGID BODY"){
            vehicleType = "Car";
        }else if(finalUserData.wheelplan == "2 WHEEL"){
            vehicleType = "Motorbike";
        }else if(finalUserData.wheelplan == "3 AXLE + 3 AXLE ARTIC"){
            vehicleType = "Lorry";
        }else{
            vehicleType = "Motorhome/Caravan";
        }

        const vehicleColour: string = finalUserData.colour;
        const vehicleMake: string = finalUserData.make;

        const vehicleData: (string | boolean)[] = [vehicleMake,vehicleColour,vehicleType,electricFuel];
    return vehicleData;
}
import { carMap } from "../Maps/carMap";
export function createOccupying(occupy: boolean[]){
    const occupyingCar = new Array(30);
        for (let i=0;i<=29;i++){
            if(occupy[i]==true){
                let bool = Math.floor(Math.random()*12);
                occupyingCar[i] = carMap.get(bool);
            }
        }
return occupyingCar;
}
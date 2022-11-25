import { UserMap } from "../Maps/userMap";
export function createOwners(occupy: boolean[]){
    const owns = new Array(30);
        let used = new Array(30);
        for (let i=0;i<=29;i++){
            if(occupy[i]==true){
                let count = 0;
                while(count==0){
                    let bool = Math.floor(Math.random()*30);
                    let proposed = UserMap.get(bool);
                    if (used.includes(proposed)){
                        count = 0;
                    }else{
                        count = 1;
                        owns[i] = proposed;
                        used.push(proposed);
                    }
                }
            }
        }
return owns;
}
export function createOccupied(){
    const occupy = new Array(30);
        for (let i=0;i<=29;i++){
            let bool = Math.floor(Math.random()*2);
            if(bool == 1){
                occupy[i]= true;
            }else{
                occupy[i]=false;
            }
        }
return occupy;
}
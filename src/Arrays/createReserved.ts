export function createReserved(){
    const reserve = new Array(30);
        for (let i=0;i<=29;i++){
            let bool = Math.floor(Math.random()*2);
            if(bool == 1){
                reserve[i]= true;
            }else{
                reserve[i]=false;
            }
        }
return reserve;
}
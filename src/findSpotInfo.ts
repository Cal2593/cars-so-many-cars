export function findSpotInfo(specSpot: string,spots: string[],reserve: boolean[],
    occupy: boolean[],occupyingCar: string[],owns: string[]){
    let found = 0;
    let i = 0;
    let pos = 0;
    while (found==0 && i<=29){
        if(spots[i]==specSpot){
            pos = i;
            found = 1;
        }
        i++
    }
    const resStatus = reserve[pos];
    const occStatus = occupy[pos];
    const occCar = occupyingCar[pos];
    const owner = owns[pos];

    return [resStatus,occStatus,occCar,owner] as const;
}
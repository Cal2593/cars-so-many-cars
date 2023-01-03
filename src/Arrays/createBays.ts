import { baseParkingBay } from '../Classes/baseParkingBay';

export function createBays(SetLocation:string) {
    let baysArr: baseParkingBay[] = new Array(100);
    let letter = 0;
    let count = 0;
    for (let i = 0; i <= 99; i++){
        let bayNum: number = count+1;
        let ID: string = String.fromCharCode(65 + letter)+bayNum;
        let loc: string = SetLocation;
        let type: string = typer(SetLocation,i);
        let cov: boolean = SetCovering(SetLocation,i);
        let elec: boolean = SetElectric(SetLocation,i,type);
        let valet: boolean = SetValet(type);

        let bay: baseParkingBay = new baseParkingBay(
            ID,
            type,
            loc,
            cov,
            elec,
            valet
        )

        if(count<9){
            count++;
        }else{
            count = 0;
        }
        if(count==0){
            letter++;
        }
        
        baysArr[i] = bay;
    }
    const creation: string = JSON.stringify(baysArr, null, 2);

    const fs = require('fs');
    fs.writeFile('../cars-so-many-cars/src/Arrays/'+SetLocation+'Bays.json',creation, (err:any) => {
        if (err) throw err;
        console.log('Data created');
    })
}

function typer(location: string, i: number): string {
    let finalType: string = '';
    switch(location){
        case 'Gloucester':
            if(i <= 59){
                finalType = 'CoachAndLorry';
            }else{
                finalType = 'MotorhomeAndCaravan';
            }
            break;

        case 'Yate':
            if(i <= 59){
                finalType = 'Standard';
            }else if(i >= 60 && i <= 79){
                finalType = 'Accessible';
            }else{
                finalType = 'MotorhomeAndCaravan';
            }
            break;
        
        case 'Bristol':
            if(i <= 49){
                finalType = 'Standard';
            }else if(i >= 50 && i <= 69){
                finalType = 'Accessible';
            }else if(i >= 70 && i <= 79){
                finalType = 'ElectricCharging';
            }else if(i >= 80 && i <= 89){
                finalType = 'Valet';
            }else{
                finalType = 'Motorbike';
            }
            break;
    }
    return finalType;
}

function SetCovering(location: string, i: number): boolean {
    let finalCovering: boolean;
    switch(location){
        case 'Gloucester':
        case 'Yate':
            finalCovering = false;
            break;
        case 'Bristol':
            if(i <= 9){
                finalCovering = false;
            }else{
                finalCovering = true;
            }
            break;
        default: 
            finalCovering = false;
    }
    return finalCovering;
}

function SetElectric(location: string, i: number, type: string): boolean {
    let finalElectric: boolean;
    switch(location){
        case 'Gloucester':
        case 'Yate':
            if(type == 'MotorhomeAndCaravan'){
                if(i<=89){
                    finalElectric = true;
                }else{
                    finalElectric = false;
                }
            }else{
                finalElectric = false;
            }
            break;
        case 'Bristol':
            if(type == 'ElectricCharging'){
                finalElectric = true;
            }else{
                finalElectric = false;
            }
            break;
        default:
            finalElectric = false;
    }
    return finalElectric;
}

function SetValet(type: string): boolean {
    if(type == 'Valet') return true;
    return false;
}
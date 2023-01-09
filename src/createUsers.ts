import { usersNames } from "./Arrays/usersNames";
import { reservation } from "./Classes/reservation";
import { user } from "./Classes/user";

export function createUsers(){
    const fs = require('fs');

    let uidRawFile = fs.readFileSync('../cars-so-many-cars/src/Arrays/usersUID.json');
    const uidFinalFile = JSON.parse(uidRawFile);

    let regRawFile = fs.readFileSync('regs.json');
    const regFinalFile = JSON.parse(regRawFile);

    let lastUID: number = uidFinalFile.lastID;
    let numToCreate: number = usersNames.length;
    let usedRegs: string[] = [];
    let nextReg: number = 0;
    let usersArr: user[] = [];

    for (let i = 0; i<numToCreate; i++){
        let UID: number = lastUID+1;
        let firstName: string = usersNames[i].substring(0,usersNames[i].indexOf(" "));
        let lastName: string = usersNames[i].substring(usersNames[i].indexOf(" ") +1);
        let email: string = firstName.toLowerCase()+lastName.toLowerCase()+"@outlook.com";
        let phone: string = "07757699519";
        let a = Math.floor(Math.random()*100);
        let address: string = a+" Dickinsons Fields, Bedminster, Bristol, BS3 5BG";
        let isActive: boolean = true;
        let userCreated: Date = new Date();
        let userUpdated: Date = new Date();
        a = Math.floor(Math.random()*3);
        let paymentPlan: string;
        switch(a){
            case 0:
                paymentPlan = "No Plan";
                break;
            case 1:
                paymentPlan = "Monthly";
                break;
            case 2:
                paymentPlan = "Annual";
                break;
            default:
                paymentPlan = "No Plan";
        }
        let vehicles: string[]=[];
        if((regFinalFile.length - usedRegs.length)>(numToCreate-i)){
            vehicles.push(regFinalFile[nextReg],regFinalFile[nextReg+1]);
            usedRegs.push(regFinalFile[nextReg],regFinalFile[nextReg+1]);
            nextReg = nextReg+2;
        }else{
            vehicles.push(regFinalFile[nextReg]);
            usedRegs.push(regFinalFile[nextReg]);
            nextReg = nextReg+1;
        };
        let password: string = "Password123";
        let reservations: number[]=[];
        let person: user = new user(
            UID,
            firstName,
            lastName,
            email,
            phone,
            address,
            isActive,
            userCreated,
            userUpdated,
            paymentPlan,
            vehicles,
            password,
            reservations
        );
        
        usersArr.push(person);
        lastUID = UID;
    }
    
    const finalUsersArr: string = JSON.stringify(usersArr, null, 2);
    fs.writeFile('../cars-so-many-cars/src/Arrays/userList.json',finalUsersArr, (err:any) => {
        if(err) throw err;
    });

    let finalUID: string = "{\"lastID\":"+lastUID+"}";
    fs.writeFile('../cars-so-many-cars/src/Arrays/usersUID.json',finalUID, (err:any) => {
        if (err) throw err;
    });
}
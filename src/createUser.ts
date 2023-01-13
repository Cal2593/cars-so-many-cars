import { user } from './Classes/user';

export function createUser(email: string, vehicle: string){
    const fs = require('fs');
    const bcrypt = require('bcrypt');

    const usersRaw = fs.readFileSync(
        '../cars-so-many-cars/src/Arrays/userList.json'
    );
    const usersFinal = JSON.parse(usersRaw);

    const usersUID = fs.readFileSync(
        '../cars-so-many-cars/src/Arrays/usersUID.json'
    );
    const usersUIDFinal = JSON.parse(usersUID);

    const firstName: string = "Frank"; //Actual user response
    const lastName: string = "Jefferson"; //Actual user response
    const phone: string = "07756951869"; //Actual user response
    const address: string = "9 Seavale Road, Clevedon, North Somerset, BS21 7QB"; //Actual user response
    const paymentPlan: string = "No plan"; //Actual user response
    const vehicleReg: string = vehicle; 
    const password: string = "Password123"; //Actual user response

    const UID: number = usersUIDFinal.lastID +1;
    const isActive: boolean = true;
    const userCreated: Date = new Date();
    const userUpdated: Date = new Date();
    const vehicles: string[] = [vehicleReg];
    const reservations: number[] = [];

    let use: user = new user(
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
    usersFinal.push(use);

    const finalUID: string = '{"lastID":' + UID + '}';
    fs.writeFileSync(
        '../cars-so-many-cars/src/Arrays/usersUID.json',
        finalUID,
        (err: any) => {
        if (err) throw err;
        }
    );

    const finalUsersFile: string = JSON.stringify(
        usersFinal,
        null,
        2
    );
    fs.writeFileSync(
        '../cars-so-many-cars/src/Arrays/userList.json',
        finalUsersFile,
        (err: any) => {
        if (err) throw err;
        }
    );

    return use.UID;
}
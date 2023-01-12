import { usersNames } from '../Arrays/usersNames';
import { user } from '../Classes/user';

export function createUsers() {
  const fs = require('fs');

  const uidRawFile = fs.readFileSync(
    '../cars-so-many-cars/src/Arrays/usersUID.json'
  );
  const uidFinalFile = JSON.parse(uidRawFile);

  const regRawFile = fs.readFileSync('regs.json');
  const regFinalFile = JSON.parse(regRawFile);

  let lastUID: number = uidFinalFile.lastID;
  const numToCreate: number = usersNames.length;
  const usedRegs: string[] = [];
  let nextReg = 0;
  const usersArr: user[] = [];

  for (let i = 0; i < numToCreate; i++) {
    const UID: number = lastUID + 1;
    const firstName: string = usersNames[i].substring(
      0,
      usersNames[i].indexOf(' ')
    );
    const lastName: string = usersNames[i].substring(
      usersNames[i].indexOf(' ') + 1
    );
    const email: string =
      firstName.toLowerCase() + lastName.toLowerCase() + '@outlook.com';
    const phone = '07757699519';
    let a = Math.floor(Math.random() * 100);
    const address: string =
      a + ' Dickinsons Fields, Bedminster, Bristol, BS3 5BG';
    const isActive = true;
    const userCreated: Date = new Date();
    const userUpdated: Date = new Date();
    a = Math.floor(Math.random() * 3);
    let paymentPlan: string;
    switch (a) {
      case 0:
        paymentPlan = 'No Plan';
        break;
      case 1:
        paymentPlan = 'Monthly';
        break;
      case 2:
        paymentPlan = 'Annual';
        break;
      default:
        paymentPlan = 'No Plan';
    }
    const vehicles: string[] = [];
    if (regFinalFile.length - usedRegs.length > numToCreate - i) {
      vehicles.push(regFinalFile[nextReg], regFinalFile[nextReg + 1]);
      usedRegs.push(regFinalFile[nextReg], regFinalFile[nextReg + 1]);
      nextReg = nextReg + 2;
    } else {
      vehicles.push(regFinalFile[nextReg]);
      usedRegs.push(regFinalFile[nextReg]);
      nextReg = nextReg + 1;
    }
    const password = 'Password123';
    const reservations: number[] = [];
    const person: user = new user(
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
  fs.writeFile(
    '../cars-so-many-cars/src/Arrays/userList.json',
    finalUsersArr,
    (err: any) => {
      if (err) throw err;
    }
  );

  const finalUID: string = '{"lastID":' + lastUID + '}';
  fs.writeFile(
    '../cars-so-many-cars/src/Arrays/usersUID.json',
    finalUID,
    (err: any) => {
      if (err) throw err;
    }
  );
}

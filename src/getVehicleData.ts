const fs = require('fs');

export function getVehicleData() {
  const rawUserData = fs.readFileSync('userReg.json');
  const finalUserData = JSON.parse(rawUserData);
  if (finalUserData.hasOwnProperty('errors')) {
    switch (finalUserData.errors[0].status) {
      case '400':
        throw new Error(
          '400 - Invalid format for vehicle registration provided'
        );
        break;
      case '404':
        throw new Error('404 - Vehicle not found');
        break;
      case '500':
        throw new Error('500 - DVLA database system error');
        //what to do here? - create temporary reservation?
        break;
      case '503':
        throw new Error('503 - DVLA system down for maintenance');
        //what to do here? - create temporary reservation?
        break;
    }
  } else if (
    finalUserData.taxStatus == 'SORN' ||
    finalUserData.motStatus == 'Not valid'
  ) {
    throw new Error(
      'This vehicle is not allowed to be driven in the UK and therefore a reservation cannot be made for this vehicle'
    );
  }

  let electricFuel: boolean;
  if (
    finalUserData.fuelType == 'ELECTRICITY' ||
    finalUserData.fuelType == 'HYBRID ELECTRIC'
  ) {
    electricFuel = true;
  } else {
    electricFuel = false;
  }

  let vehicleType: string;
  switch (finalUserData.wheelplan) {
    case '2 AXLE RIGID BODY':
      vehicleType = 'Car';
      break;
    case '3 WHEEL':
      vehicleType = 'Tricycle';
      break;
    case '2 WHEEL':
      vehicleType = 'Motorbike';
      break;
    case '3 AXLE RIGID BODY':
      vehicleType = 'Motorhome/Caravan';
      break;
    case 'MULTI-AXLE RIGID':
    case '2 AXLE & ARTIC':
    case '3 AXLE & ARTIC':
    case 'MULTI-AXLE & ARTIC':
    case 'CRAWLER NON-STANDARD':
      vehicleType = 'Lorry';
      break;
    default:
      vehicleType = 'Unknown';
      break;
  }

  const vehicleColour: string = finalUserData.colour;
  const vehicleMake: string = finalUserData.make;

  const vehicleData: (string | boolean)[] = [
    vehicleMake,
    vehicleColour,
    vehicleType,
    electricFuel
  ];
  return vehicleData;
}

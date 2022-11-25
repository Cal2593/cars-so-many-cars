import { createSpots } from './Arrays/createSpots';
import { createReserved } from './Arrays/createReserved';
import { createOccupied } from './Arrays/createOccupied';
import { createOccupying } from './Arrays/createOccupying';
import { createOwners } from './Arrays/createOwners';

export function CreateArrays() {
  const spots = createSpots();
  const reserve = createReserved();
  const occupy = createOccupied();
  const occupyingCar = createOccupying(occupy);
  const owns = createOwners(occupy);
  return [spots, reserve, occupy, occupyingCar, owns] as const;
}

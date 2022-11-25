import { vehMap } from '../Maps/vehMap';
export function createOccupying(occupy: boolean[]) {
  const occupyingCar = new Array(30);
  for (let i = 0; i <= 29; i++) {
    if (occupy[i] == true) {
      const a = Math.floor(Math.random() * 12);
      occupyingCar[i] = vehMap.get(a);
    }
  }
  return occupyingCar;
}

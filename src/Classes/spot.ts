export default class Spot {
  ID = '';
  spotType = '';
  reserved = false;
  occupied = false;
  location = '';
  covering?: boolean;
  basePrice = 0;

  construction(): string {
    return 'Retrieved ${this.spotType} spot ${this.ID}';
  }
}

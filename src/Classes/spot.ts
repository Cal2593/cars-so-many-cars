export default class Spot {
  ID = '';
  spotType = '';
  reserved = false;
  occupied = false;
  location = '';
  basePrice = 0;

  construction(): string {
    return 'Retrieved ${this.spotType} spot ${this.ID}';
  }
}

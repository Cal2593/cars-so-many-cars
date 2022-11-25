import { VehicleType } from '../enums/vehicleType';

export interface vehicle {

  get type(): VehicleType;
  set type(value: VehicleType);
  get make(): string;
  set make(value: string);
  get model(): string;
  set model(value: string);
  get reg(): string;
  set reg(value: string);
  get owner(): string;
  set owner(value: string);
  get reservation(): boolean;
  set reservation(value: boolean);
  get colour(): string;
  set colour(value: string);
  get height(): number;
  set height(value: number);
  get weight(): number;
  set weight(value: number);
  get length(): number;
  set length(value: number);
  
}

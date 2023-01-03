export class UserData {
  private _registrationNumber: string;
  private _taxStatus: string;
  private _taxDueDate: string;
  private _motStatus: string;
  private _make: string;
  private _yearOfManufacture: number;
  private _engineCapacity: number;
  private _co2Emissions: number;
  private _fuelType: string;
  private _markedForExport: boolean;
  private _colour: string;
  private _typeApproval: string;
  private _dateOfLastV5Issued: string;
  private _motExpiryData: string;
  private _wheelplan: string;
  private _monthOfFirstRegistration: string;

  public get registrationNumber(): string {
    return this._registrationNumber;
  }
  public set registrationNumber(value: string) {
    this._registrationNumber = value;
  }

  public get taxStatus(): string {
    return this._taxStatus;
  }
  public set taxStatus(value: string) {
    this._taxStatus = value;
  }

  public get taxDueDate(): string {
    return this._taxDueDate;
  }
  public set taxDueDate(value: string) {
    this._taxDueDate = value;
  }

  public get motStatus(): string {
    return this._motStatus;
  }
  public set motStatus(value: string) {
    this._motStatus = value;
  }

  public get make(): string {
    return this._make;
  }
  public set make(value: string) {
    this._make = value;
  }

  public get yearOfManufacture(): number {
    return this._yearOfManufacture;
  }
  public set yearOfManufacture(value: number) {
    this._yearOfManufacture = value;
  }

  public get engineCapacity(): number {
    return this._engineCapacity;
  }
  public set engineCapacity(value: number) {
    this._engineCapacity = value;
  }

  public get co2Emissions(): number {
    return this._co2Emissions;
  }
  public set co2Emissions(value: number) {
    this._co2Emissions = value;
  }

  public get fuelType(): string {
    return this._fuelType;
  }
  public set fuelType(value: string) {
    this._fuelType = value;
  }

  public get markedForExport(): boolean {
    return this._markedForExport;
  }
  public set markedForExport(value: boolean) {
    this._markedForExport = value;
  }

  public get colour(): string {
    return this._colour;
  }
  public set colour(value: string) {
    this._colour = value;
  }

  public get typeApproval(): string {
    return this._typeApproval;
  }
  public set typeApproval(value: string) {
    this._typeApproval = value;
  }

  public get dateOfLastV5Issued(): string {
    return this._dateOfLastV5Issued;
  }
  public set dateOfLastV5Issued(value: string) {
    this._dateOfLastV5Issued = value;
  }

  public get motExpiryData(): string {
    return this._motExpiryData;
  }
  public set motExpiryData(value: string) {
    this._motExpiryData = value;
  }

  public get wheelplan(): string {
    return this._wheelplan;
  }
  public set wheelplan(value: string) {
    this._wheelplan = value;
  }

  public get monthOfFirstRegistration(): string {
    return this._monthOfFirstRegistration;
  }
  public set monthOfFirstRegistration(value: string) {
    this._monthOfFirstRegistration = value;
  }
}

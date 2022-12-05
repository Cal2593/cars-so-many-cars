//Data Access Object Interface - Defines standard operations that can be performed on Model Objects
import Spot from "./spot";

export interface ISpotBuilder {
    spot: Spot
    setID(ID: string): this
    setSpotType(spotType: string): this
    setReservedStatus(reserved: boolean): this
    setOccupiedStatus(occupied: boolean): this
    setLocation(location: string): this
    setBasePrice(basePrice: number): this
    getResult(): Spot

    //get ID(): string;
    //set ID(value: string);
    //get spotType(): string;
    //set spotType(value: string);
    //get reservationStatus(): boolean;
    //set reservationStatus(value: boolean);
    //get occupiedStatus(): boolean; 
    //set occupiedStatus(value: boolean);
    //get vehicleRegistration(): string;
    //set vehicleRegistration(value: string);
    ////get electricCharging(): boolean;
    ////set electricCharging(value: boolean);
    ////get covered(): boolean; //in the future - could check weather and when it's sunny recommend covered spots
    ////set covered(value: boolean); 
    ////get valet(): boolean;
    ////set valet(value: boolean);
    //get location(): string;
    //set location(value: string);
    //get basePrice(): number;
    //set basePrice(value: number);
}

/*
All Spots
    Have an ID
    Have a spotType
    Can be reserved
    Can be occupied
    Can have a vehicle registration
    Have a location
    Have a base price

Occupied Spots
    Can be occupied
    Can have a vehicle registration

Standard parking spot
    Needs an ID
    Needs spotType : Standard
    Can be reserved
    Can be occupied
    Can have a vehicle registration
    Has a location
    Has a base price
    Potentially is covered
    Has a width: 2500mm
    Potentially has a height: 2300mm
    Has a length: 5000mm

Electric car parking spot
    Needs an ID
    Needs spotType : Electric
    Can be reserved
    Can be occupied
    Can have a vehicle registration
    Has a location
    Has a base price
    Has a charging port
    Is covered
    Has a width: 2500mm
    Has a height: 2300mm
    Has a length: 5000mm

Valet parking spot
    Needs an ID
    Needs spotType : Electric
    Can be reserved
    Can be occupied
    Can have a vehicle registration
    Has a location
    Has a base price
    Is covered
    Has a width: 2800mm
    Has a height: 2300mm
    Has a length: 5500mm

Lorry parking spot
    Needs an ID
    Needs spotType : Lorry
    Can be reserved
    Can be occupied
    Can have a vehicle registration
    Has a location
    Has a base price
    Has a width: 3000mm
    Has a length: 19000mm

Motorbike parking spot
    Needs an ID
    Needs spotType : Motorbike
    Can be reserved
    Can be occupied
    Can have a vehicle registration
    Has a location
    Has a base price
    Potentially is covered
    Has a width: 1000mm
    Potentially has a height: 2300mm
    Has a length: 2500mm

Motorhome parking spot
    Needs an ID
    Needs spotType : Motorhome
    Can be reserved
    Can be occupied
    Can have a vehicle registration
    Has a location
    Has a base price
    Has a width: 3000mm
    Has a length: 13000mm
*/
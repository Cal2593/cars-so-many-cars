export class Car {
    make: string;
    model: string;
    reg: string;
    owner: string;

    constructor(mak: string, mod: string, reg: string, own: string) {
        this.make = mak;
        this.model = mod;
        this.reg = reg;
        this.owner = own;
    }
}
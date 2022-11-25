export class Car {
    make: string;
    model: string;
    reg: string;
    owner: string;
    reservation: boolean;

    constructor(mak: string, mod: string, reg: string, own: string, res: boolean) {
        this.make = mak;
        this.model = mod;
        this.reg = reg;
        this.owner = own;
        this.reservation = res;
    }
}
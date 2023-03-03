import { parseISO, add, Interval } from 'date-fns';
import { UserReservationRequest } from "./Classes/UserReservationRequest";

export function incomingReservation(values:any){
    const userID: number = 1; //change this
    const location: string = values.location;
    const startHour: number = +values.starttime;
    const startMinutes: number = +values.startminutes;
    const endHour: number = +values.endtime;
    const endMinutes: number = +values.endminutes;
    const vehicleRegistration: string = values.vehicleregistration;
    let electricCharging: boolean;
    let covered: boolean;
    let valet: boolean;
    let accessible: boolean;
    if(values.electricCharging){
        electricCharging = true;
    }else{
        electricCharging = false;
    }
    if(values.covered){
        covered = true;
    }else{
        covered = false;
    }
    if(values.valet){
        valet = true;
    }else{
        valet = false;
    }
    if(values.accessible){
        accessible = true;
    }else{
        accessible = false;
    }
    const date: Date = parseISO(values.date);
    const interval: Interval = {
        start: add(date,{hours: startHour, minutes: startMinutes}),
        end: add(date, {hours: endHour, minutes: endMinutes})
    };

    const userRes: UserReservationRequest = new UserReservationRequest(
        userID,
        vehicleRegistration,
        interval,
        electricCharging,
        covered,
        valet,
        accessible,
        location
    );
    console.log(userRes);
    return userRes;
}
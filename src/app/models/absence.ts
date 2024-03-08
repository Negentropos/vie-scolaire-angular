import { User } from "./user";

export interface Absence {
    id? : number;
    date : Date;
    startTime : string;
    endTime : string;
    declarationDate : Date;
    description : string;
    canteen : boolean;
    allDay : boolean;
    nursery : boolean;
    afterSchool : boolean;
    user? : User;
    childId: number;
}

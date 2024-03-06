import { Time } from "@angular/common";
import { Child } from "./child";
import { User } from "./user";

export interface Absence {
    id? : number;
    date : Date;
    startTime : String;
    endTime : String;
    declarationDate : Date;
    description : String;
    canteen : Boolean;
    allDay : Boolean;
    nursery : Boolean;
    afterSchool : Boolean;
    user? : User;
    childId: number;
}

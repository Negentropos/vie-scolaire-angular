import { Absence } from "./absence";
import { ClassSchool } from "./class-school";
import { User } from "./user";

export interface Child {
    id : number;
    firstName : string;
    lastName : string;
    gender : string;
    classSchool : ClassSchool;
    users : User[];
    absences : Absence[];
}

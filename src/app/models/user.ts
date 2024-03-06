import { Cycle } from "./cycle";
import { Role } from "./role";

export interface User {
    id : number;
    firstName : string;
    lastName : string;
    email : string;
    role : Role;
    cycles : Cycle[];
    tel1 : string;
    tel2 : string;
}

import { NgbDate } from "@ng-bootstrap/ng-bootstrap";

export interface EmployeeModel {
    id:string;
    ename:string,
    dname:string;
    doj:string,
    dob:string;
    ep:string;
    er:string;
    joinDate:NgbDate;
    birthDate:NgbDate
}


import { EMPLOYEE_DETAIL } from './../../app-core/consts/api-url';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseApiService } from 'src/app/app-core/services/base-api.service';
import { Observable } from 'rxjs';
import { EMPLOYEE_LIST } from 'src/app/app-core/consts/api-url';
import { EmployeeModel } from '../models/employee.model';
import { map } from 'rxjs/operators';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class EmployeeService extends BaseApiService {

  constructor(
    protected http: HttpClient
) {
  super(http);
}

  getEmployeeList(): Observable<EmployeeModel[]>{
    return this.makeRequest('GET',EMPLOYEE_LIST,{}).pipe(map((lists: any) => { 
      return lists.map((list: EmployeeModel) => {
        list.joinDate =this.changeDateFormat(list.doj.split('/'));
        return list;
      });
    }))
  }

  getEmployeeDetail(id:number): Observable<EmployeeModel>{
    return this.makeRequest('GET',EMPLOYEE_DETAIL+id,{}).pipe(map((lists: any) => { 
      return lists.map((list: EmployeeModel) => {
        list.joinDate = this.changeDateFormat(list.doj.split('/'));
        list.birthDate = this.changeDateFormat(list.dob.split('/'));
        return list;
      });
    }))
  }

  changeDateFormat(date: string[]): NgbDate{
    return new NgbDate(
      Number(date[2]),
      Number(date[1]),
      Number(date[0])
      )
  }

  download(url:string): Observable<Blob>{
    return this.file(url);
  }
}

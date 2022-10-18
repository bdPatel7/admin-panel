import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { SpinnerService } from 'src/app/app-core/services/spinner.service';
import { EmployeeModel } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';

@Injectable({
  providedIn: 'root'
})
export class ListResolver implements Resolve<any> {
  constructor(
    private employee: EmployeeService,
    private spinner: SpinnerService
) { }
  resolve(): Observable<any> {
    this.spinner.show();
   return this.employee.getEmployeeList().pipe(
      catchError(error => {
        return of(false);
      }),
      finalize(() => {
        this.spinner.hide();
      })
    );
  }
}

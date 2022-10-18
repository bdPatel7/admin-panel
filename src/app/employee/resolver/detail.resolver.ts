import { catchError, finalize } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { EmployeeService } from '../services/employee.service';
import { SpinnerService } from 'src/app/app-core/services/spinner.service';

@Injectable({
  providedIn: 'root'
})
export class DetailResolver implements Resolve<boolean> {
  constructor(
    private employee: EmployeeService,
    private spinner: SpinnerService
) { }
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    this.spinner.show();
    return this.employee.getEmployeeDetail(route.params['id']).pipe(
      catchError(error => {
        return of(false);
      }),
      finalize(() => {
        this.spinner.hide();
      })
    );
  }
}

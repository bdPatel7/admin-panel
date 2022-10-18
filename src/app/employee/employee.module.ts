import { DetailResolver } from './resolver/detail.resolver';
import { AppCoreModule } from './../app-core/app-core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { ListComponent } from './components/list/list.component';
import { ViewComponent } from './components/view/view.component';
import { EmployeeComponent } from './employee.component';
import { EmployeeService } from './services/employee.service';
import { ListResolver } from './resolver/list.resolver';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderModule } from '../shared/header/header.module';

@NgModule({
  declarations: [
    ListComponent,
    ViewComponent,
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    AppCoreModule,
    EmployeeRoutingModule,
    NgbDatepickerModule,
    HeaderModule
  ],
  providers: [
    EmployeeService,
    ListResolver,
    DetailResolver
  ]
})
export class EmployeeModule { }

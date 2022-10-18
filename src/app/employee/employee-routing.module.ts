import { DetailResolver } from './resolver/detail.resolver';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { ViewComponent } from './components/view/view.component';
import { EmployeeComponent } from './employee.component';
import { ListResolver } from './resolver/list.resolver';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    children: [
      { path: '', redirectTo: 'list' },
      {
        path: 'list',
        resolve: {
          data: ListResolver,
        },
        component: ListComponent,
      },
      { path: 'view/:id',
        resolve: {
          data: DetailResolver,
        },
        component: ViewComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}

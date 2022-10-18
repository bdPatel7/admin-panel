import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { HeaderModule } from '../shared/header/header.module';
import { AppCoreModule } from '../app-core/app-core.module';
import { AuthComponent } from './auth.component';


@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AppCoreModule,
    HeaderModule
  ]
})
export class AuthModule { }

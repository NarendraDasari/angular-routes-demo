import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, Route } from '@angular/router';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ChangeUsernameComponent } from './change-username/change-username.component';
import { AuthComponent } from './auth.component';


@NgModule({
  declarations: [
    LoginComponent,
    ChangePasswordComponent,
    ChangeUsernameComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    Router,
    AuthRoutingModule
  ]
})
export class AuthModule {
}

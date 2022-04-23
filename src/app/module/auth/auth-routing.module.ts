import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeUsernameComponent } from './change-username/change-username.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // {
  //   path: 'auth',
  //   children: [
  //     {
  //       path: 'change-username',
  //       component: ChangeUsernameComponent
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

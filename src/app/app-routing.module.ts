import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './module/auth/auth.component';
import { ChangePasswordComponent } from './module/auth/change-password/change-password.component';
import { ChangeUsernameComponent } from './module/auth/change-username/change-username.component';
import { LoginComponent } from './module/auth/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { ContactComponent } from './pages/users/contact/contact.component';
import { ProfileComponent } from './pages/users/profile/profile.component';
import { UserDetailsComponent } from './pages/users/user-details/user-details.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path: 'tasks',
    component: TasksComponent
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      }
    ]
  },

  {
    path: 'user/:id',
    component: UserDetailsComponent
  },

  {
    path: 'auth',
    component: AuthComponent,
    loadChildren: () => import('./module/auth/auth.module').then(model => model.AuthModule),
  },
  {
    path: '**', // this matchs to anything. so make sure this is always your last routes.
    component: NotFoundComponent
  },

  // {
  //   path: 'auth',
  //   component: AuthComponent,
  //   loadChildren: () => import('./module/auth/auth-routing.module').then(model => model.AuthRoutingModule)
  // }
  // {
  //   path: 'module',
  //   component: LoginModule,
  //   children: [
  //     {
  //       path: 'module',
  //       redirectTo: '/login',
  //       loadChildren: () => import('./module/login/login.component').then(m => m.LoginComponent)
  //     }
  //   ],

  // }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true }), // help in debugging the routes.

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

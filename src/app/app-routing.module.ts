import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './module/login/login.component';
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
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**', // this matchs to anything
    component: NotFoundComponent
  }
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
    RouterModule.forRoot(routes, { enableTracing: true }) // help in debugging the routes.
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

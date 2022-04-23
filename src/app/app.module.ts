import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './pages/users/users.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginModule } from './module/login/login.module';
import { LoginComponent } from './module/login/login.component';
import { UserDetailsComponent } from './pages/users/user-details/user-details.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProfileComponent } from './pages/users/profile/profile.component';
import { ContactComponent } from './pages/users/contact/contact.component';

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
  declarations: [
    AppComponent,
    UsersComponent,
    TasksComponent,
    NavbarComponent,
    UserDetailsComponent,
    NotFoundComponent,
    ProfileComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, { enableTracing: true }) // help in debugging the routes.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

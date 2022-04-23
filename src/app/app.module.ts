import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './pages/users/users.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserDetailsComponent } from './pages/users/user-details/user-details.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProfileComponent } from './pages/users/profile/profile.component';
import { ContactComponent } from './pages/users/contact/contact.component';




@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    TasksComponent,
    NavbarComponent,
    UserDetailsComponent,
    NotFoundComponent,
    ProfileComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

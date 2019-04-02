import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VoterComponent } from './voter/voter.Component';
import { TodosComponent } from './todos/todos.Component';
import { UsersComponent } from './users/users.Component'; 
import { UserDetailsComponent } from './user-details/user-details.Component';


@NgModule({
  declarations: [
    AppComponent,
    VoterComponent,
    TodosComponent,
    UsersComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

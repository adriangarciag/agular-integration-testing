import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VoterComponent } from 'src/app/voter/voter.component';
import { TodosComponent } from 'src/app/todos/todos.component';
import { UsersComponent } from 'src/app/users/users.component'; 
import { UserDetailsComponent } from 'src/app/user-details/user-details.component';


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

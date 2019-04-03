
import { VoterComponent } from 'src/app/voter/voter.component';
import { TodosComponent } from 'src/app/todos/todos.component';
import { UsersComponent } from 'src/app/users/users.component'; 
import { UserDetailsComponent } from 'src/app/user-details/user-details.component';

export const routes = [
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'users', component: UsersComponent },
 { path: 'todos', component: TodosComponent },
  { path: 'voter', component: VoterComponent },

  
];

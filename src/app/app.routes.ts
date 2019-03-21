import { Routes } from '@angular/router';
import { TodoListTaskComponent } from './todos/todo-list-task/todo-list-task.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';

export const ROUTES: Routes = [
  {
    path: 'lists',
    component: TodoListComponent
     // canActivate: [ LoggedInGuard ]
  },
  {
    path: 'lists/:id',
    component: TodoListTaskComponent
     // canActivate: [ LoggedInGuard ]
  }
];

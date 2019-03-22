import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { TodoListTaskComponent } from './todos/todo-list-task/todo-list-task.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { AuthGuard } from './shared/auth.guard';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'lists',
    component: TodoListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'lists/:id',
    component: TodoListTaskComponent,
    canActivate: [AuthGuard]
  }
];

import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { TodoListTaskComponent } from './todos/todo-list-task/todo-list-task.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'lists',
    component: TodoListComponent
  },
  {
    path: 'lists/:id',
    component: TodoListTaskComponent
  }
];

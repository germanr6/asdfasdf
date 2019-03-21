import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../ui/ui.module';
import { AddTodoDialogComponent } from './add-todo-dialog/add-todo-dialog.component';
import {
  MatDialogModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatCardModule,
  MatCheckboxModule,
  MatMenuModule,
  MatTooltipModule,
  MatButtonToggleModule} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditTodoDialogComponent } from './edit-todo-dialog/edit-todo-dialog.component';
import { TodoListTaskComponent } from './todo-list-task/todo-list-task.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddTodoTaskDialogComponent } from './add-todo-task-dialog/add-todo-task-dialog.component';
import { EditTodoTaskDialogComponent } from './edit-todo-task-dialog/edit-todo-task-dialog.component';

@NgModule({
  declarations: [
    AddTodoDialogComponent,
    EditTodoDialogComponent,
    TodoListComponent,
    TodoListTaskComponent,
    AddTodoTaskDialogComponent,
    EditTodoTaskDialogComponent
  ],
  imports: [
    CommonModule,
    UiModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatMenuModule,
    MatButtonToggleModule
  ],
  exports: [],
  entryComponents: [
    AddTodoDialogComponent,
    EditTodoDialogComponent,
    AddTodoTaskDialogComponent,
    EditTodoTaskDialogComponent
  ]
})
export class TodosModule {}

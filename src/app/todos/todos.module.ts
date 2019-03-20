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
  MatButtonModule
} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditTodoDialogComponent } from './edit-todo-dialog/edit-todo-dialog.component';

@NgModule({
  declarations: [AddTodoDialogComponent, EditTodoDialogComponent],
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
    MatInputModule
  ],
  exports: [],
  entryComponents: [AddTodoDialogComponent, EditTodoDialogComponent]
})
export class TodosModule {}

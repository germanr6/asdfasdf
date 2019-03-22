import { AuthService } from './../../shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { TodoService } from '../shared/todo.service';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-add-todo-dialog',
  templateUrl: './add-todo-dialog.component.html',
  styleUrls: ['./add-todo-dialog.component.css']
})
export class AddTodoDialogComponent implements OnInit {
  todoListForm: FormGroup;

  constructor(
    private authService: AuthService,
    private dialogRef: MatDialogRef<AddTodoDialogComponent>,
    private todoService: TodoService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    const todo = new Todo(
      null,
      this.authService.getUser().userId,
      this.todoListForm.value.name,
      this.todoListForm.value.description
    );
    this.todoService.addTodoList(todo).subscribe(() => {}, () => {});
    this.dialogRef.close();
  }

  private initForm() {
    this.todoListForm = new FormGroup({
      name: new FormControl(),
      description: new FormControl()
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-add-todo-dialog',
  templateUrl: './add-todo-dialog.component.html',
  styleUrls: ['./add-todo-dialog.component.css']
})
export class AddTodoDialogComponent implements OnInit {
  todoListForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddTodoDialogComponent>,
    private todoService: TodoService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    this.todoService.addTodoList(this.todoListForm.value.name).subscribe(
      data => {
        console.log('data', data);
      },
      error => {
        console.log('error: ', error);
      }
    );
    this.dialogRef.close();
  }

  private initForm() {
    this.todoListForm = new FormGroup({
      name: new FormControl(),
      description: new FormControl()
    });
  }
}

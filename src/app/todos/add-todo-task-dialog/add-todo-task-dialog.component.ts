import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TodoTaskService } from '../shared/todo-task.service';
import { Task } from '../model/task.model';

@Component({
  selector: 'app-add-todo-task-dialog',
  templateUrl: './add-todo-task-dialog.component.html',
  styleUrls: ['./add-todo-task-dialog.component.css']
})
export class AddTodoTaskDialogComponent implements OnInit {
  addTaskForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    private data: { listId: number },
    private dialogRef: MatDialogRef<AddTodoTaskDialogComponent>,
    private todoTaskService: TodoTaskService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    const task = new Task(
      null,
      this.data.listId,
      this.addTaskForm.value.name,
      false,
      this.addTaskForm.value.description
    );
    this.todoTaskService.addTask(task).subscribe(
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
    this.addTaskForm = new FormGroup({
      name: new FormControl(),
      description: new FormControl()
    });
  }
}

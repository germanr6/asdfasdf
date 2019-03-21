import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { TodoTaskService } from '../shared/todo-task.service';
import { Task } from '../model/task.model';

@Component({
  selector: 'app-edit-todo-task-dialog',
  templateUrl: './edit-todo-task-dialog.component.html',
  styleUrls: ['./edit-todo-task-dialog.component.css']
})
export class EditTodoTaskDialogComponent implements OnInit {
  editTaskForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    private data: {
      listId: number;
      taskId: number;
      taskName: string;
      taskDescription: string;
      taskDone: boolean;
    },
    private dialogRef: MatDialogRef<EditTodoTaskDialogComponent>,
    private todoTaskService: TodoTaskService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    const task = new Task(
      this.data.taskId,
      this.data.listId,
      this.editTaskForm.value.name,
      this.data.taskDone,
      this.editTaskForm.value.description
    );
    this.todoTaskService.editTask(this.data.taskId, task).subscribe(
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
    this.editTaskForm = new FormGroup({
      name: new FormControl(this.data.taskName),
      description: new FormControl(this.data.taskDescription)
    });
  }
}

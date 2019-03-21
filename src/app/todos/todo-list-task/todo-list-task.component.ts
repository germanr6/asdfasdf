import { EditTodoTaskDialogComponent } from './../edit-todo-task-dialog/edit-todo-task-dialog.component';
import { AddTodoTaskDialogComponent } from './../add-todo-task-dialog/add-todo-task-dialog.component';
import { Task } from './../model/task.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { TodoTaskService } from '../shared/todo-task.service';
import { TodoService } from '../shared/todo.service';
import { Todo } from '../model/todo.model';

export class Item {
  constructor(
    public name: string,
    public description?: string,
    public checked?: boolean
  ) {
    this.checked = checked || false;
  }
}

@Component({
  selector: 'app-todo-list-task',
  templateUrl: './todo-list-task.component.html',
  styleUrls: ['./todo-list-task.component.css']
})
export class TodoListTaskComponent implements OnInit {
  selectedFiliter = 'all';
  listId = this.route.snapshot.params.id;
  list: Todo = null;
  listItems: Array<Task> = [];
  listItemsFiltered: Array<Task> = [];
  loadingListItems = true;

  constructor(
    private todoTaskService: TodoTaskService,
    private todoService: TodoService,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loadTodoList();
    this.loadTodoTaskList();
  }

  public loadTodoList() {
    this.todoService.getOne(this.listId).subscribe(data => {
      this.list = data;
    });
  }

  public loadTodoTaskList() {
    this.todoTaskService.getAllTask(this.listId).subscribe(data => {
      this.listItems = data;
      this.listItemsFiltered = data;
      this.loadingListItems = false;
    });
  }

  public openAddListItemDialog(listId: number) {
    const dialogRef = this.dialog.open(AddTodoTaskDialogComponent, {
      data: {
        listId
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.loadTodoTaskList();
    });
  }

  onFilter(filterValue: string) {
    switch (filterValue) {
      case 'all':
        this.listItems = this.listItemsFiltered;
        break;
      case 'completed':
        this.listItems = this.listItemsFiltered.filter(
          task => task.done === true
        );
        break;
      case 'outstanding':
        this.listItems = this.listItemsFiltered.filter(
          task => task.done === false
        );
        break;
    }
  }

  public openEditListItemDialog(
    listId: number,
    taskId: number,
    taskName: string,
    taskDescription: string,
    taskDone: boolean
  ) {
    console.log('bool: ' + taskDone);
    const dialogRef = this.dialog.open(EditTodoTaskDialogComponent, {
      data: {
        listId,
        taskId,
        taskName,
        taskDescription,
        taskDone
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.loadTodoTaskList();
    });
  }

  public deleteTask(taskId: number, taskName: string) {
    const task = new Task(taskId, this.listId, null, null, null);
    this.todoTaskService.deleteTask(taskId, task).subscribe(() => {
      this.loadTodoTaskList();
    });
  }

  public checkItem(event, taskId: number, taskName: string) {
    const animationDuration = 600;
    setTimeout(() => {
      if (event.checked) {
        const task = new Task(taskId, this.listId, taskName, true, null);
        this.todoTaskService.completeTask(this.listId, task).subscribe(
          () => {
            this.loadTodoTaskList();
          },
          error => {
            console.log('error: ', error);
          }
        );
      }
    }, animationDuration);
  }

  public uncheckItem(event, taskId: number, taskName: string) {
    const animationDuration = 400;

    setTimeout(() => {
      if (!event.checked) {
        const task = new Task(taskId, this.listId, taskName, false, null);
        this.todoTaskService.uncompleteTask(this.listId, task).subscribe(
          data => {
            this.loadTodoTaskList();
          },
          error => {
            console.log('error: ', error);
          }
        );
      }
    }, animationDuration);
  }
}

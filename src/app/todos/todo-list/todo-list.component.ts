import { AddTodoDialogComponent } from './../add-todo-dialog/add-todo-dialog.component';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';
import { Todo } from '../model/todo.model';
import { MatDialog } from '@angular/material';
import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Array<Todo> = [];
  loadingLists = true;

  constructor(private todoService: TodoService, private dialog: MatDialog) {}

  ngOnInit() {
    this.loadTodoLists();
  }

  public loadTodoLists() {
    this.todoService.getAll().subscribe(data => {
      this.todos = data;
      this.loadingLists = false;
    });
  }

  public openList(event, listId: number) {
    this.todoService.openListDetails(event, listId);
  }

  public openAddListDialog() {
    const dialogRef = this.dialog.open(AddTodoDialogComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.loadTodoLists();
    });
  }

  public openEditListDialog(
    listId: number,
    listName: string,
    listDescription: string
  ) {
    const dialogRef = this.dialog.open(EditTodoDialogComponent, {
      data: {
        listId,
        listName,
        listDescription
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.loadTodoLists();
    });
  }

  public deleteTodoList(listId: number) {
    this.todoService.deleteTodoList(listId).subscribe(() => {
      this.loadTodoLists();
    });
  }
}

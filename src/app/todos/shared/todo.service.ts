import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../model/todo.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get('/api/todo');
  }

  addTodoList(todo: object): Observable<object> {
    return this.http.post('/api/todo', { name: todo }, httpOptions);
  }

  deleteTodoList(listId: number): Observable<object> {
    return this.http.delete('/api/todo/' + listId, httpOptions);
  }

  updateTodoList(listId: number, listName: string): Observable<object> {
    console.log(listId, listName);
    return this.http.put('/api/todo/' + listId, { name: listName }, httpOptions);
  }
}

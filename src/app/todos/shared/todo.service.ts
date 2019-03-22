import { Router } from '@angular/router';
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
  constructor(private http: HttpClient, private router: Router) {}

  openListDetails(event, listId: number) {
    this.router.navigate([this.router.url, listId]);
  }

  getOne(listId: number): Observable<any> {
    return this.http.get('/api/todo/list/' + listId);
  }

  getAll(userId: number): Observable<any> {
    return this.http.get('/api/todo/list/user/' + userId);
  }

  addTodoList(todo: Todo): Observable<object> {
    return this.http.post('/api/todo/list', todo, httpOptions);
  }

  deleteTodoList(listId: number): Observable<object> {
    return this.http.delete('/api/todo/list/' + listId);
  }

  updateTodoList(listId: number, todo: Todo): Observable<object> {
    return this.http.put('/api/todo/list/' + listId, todo, httpOptions);
  }
}

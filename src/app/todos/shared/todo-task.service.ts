import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../model/task.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoTaskService {
  constructor(private http: HttpClient, private router: Router) {}

  getAllTask(listId: number): Observable<any> {
    return this.http.get('/api/todo/task/list/' + listId, httpOptions);
  }

  addTask(task: Task): Observable<object> {
    return this.http.post('/api/todo/task', task, httpOptions);
  }

  editTask(taskId: number, task: Task): Observable<object> {
    return this.http.put('/api/todo/task/' + taskId, task, httpOptions);
  }

  deleteTask(taskId: number, task: Task): Observable<object> {
    return this.http.request('DELETE', '/api/todo/task/' + taskId, {
      body: task
    });
  }

  completeTask(taskId: number, task: Task): Observable<object> {
    return this.http.put('/api/todo/task/' + taskId, task, httpOptions);
  }

  uncompleteTask(taskId: number, task: Task): Observable<object> {
    return this.http.put('/api/todo/task/' + taskId, task, httpOptions);
  }
}

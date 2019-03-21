import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListTaskComponent } from './todo-list-task.component';

describe('TodoListTaskComponent', () => {
  let component: TodoListTaskComponent;
  let fixture: ComponentFixture<TodoListTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

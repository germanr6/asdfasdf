import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodoTaskDialogComponent } from './add-todo-task-dialog.component';

describe('AddTodoTaskDialogComponent', () => {
  let component: AddTodoTaskDialogComponent;
  let fixture: ComponentFixture<AddTodoTaskDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTodoTaskDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTodoTaskDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

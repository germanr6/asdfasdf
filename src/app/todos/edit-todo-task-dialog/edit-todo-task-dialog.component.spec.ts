import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTodoTaskDialogComponent } from './edit-todo-task-dialog.component';

describe('EditTodoTaskDialogComponent', () => {
  let component: EditTodoTaskDialogComponent;
  let fixture: ComponentFixture<EditTodoTaskDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTodoTaskDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTodoTaskDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

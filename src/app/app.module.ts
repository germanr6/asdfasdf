import { TodoTaskService } from './todos/shared/todo-task.service';
import { HomeModule } from './home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UiModule } from './ui/ui.module';
import { TodosModule } from './todos/todos.module';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { ROUTES } from './app.routes';
import { TodoService } from './todos/shared/todo.service';
import { AuthGuard } from './shared/auth.guard';
import { AuthService } from './shared/auth.service';
import { JwtInterceptor } from './shared/jwt.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules }),
    UiModule,
    TodosModule,
    HomeModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    TodoService,
    TodoTaskService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UiModule } from './ui/ui.module';
import { TodosModule } from './todos/todos.module';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { ROUTES } from './app.routes';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules }),
    UiModule,
    TodosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

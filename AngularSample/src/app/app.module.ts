import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ToDoComponent } from './to-do/to-do.component';
import { CategoriesComponent } from './to-do/categories/categories.component';
import { TasksComponent } from './to-do/tasks/tasks.component';
import { SubTasksComponent } from './to-do/sub-tasks/sub-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ToDoComponent,
    CategoriesComponent,
    TasksComponent,
    SubTasksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

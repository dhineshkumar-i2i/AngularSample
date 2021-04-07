import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { SubTasksComponent } from './components/sub-tasks/sub-tasks.component';
import { DataModelService } from './services/data-model.service';

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
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataModelService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { SubTasksComponent } from './components/sub-tasks/sub-tasks.component';
import { DataModelService } from './services/dataSource/data-model.service';
import { FormsModule } from '@angular/forms';
import { LoginModule } from 'src/login/login.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToDoComponent,
    CategoriesComponent,
    TasksComponent,
    SubTasksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LoginModule
  ],
  providers: [DataModelService],
  bootstrap: [AppComponent]
})
export class AppModule { }

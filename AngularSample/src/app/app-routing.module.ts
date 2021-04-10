import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { AuthenticateGuard } from './gaurds/authenticate.guard';

const routes: Routes = [
  { path: 'login',  component: LoginComponent},
  { path: 'to-do', component: ToDoComponent, canActivate: [AuthenticateGuard]},
  { path: '',   redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

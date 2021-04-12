import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoComponent } from './components/to-do/to-do.component';
import { AuthenticateGuard } from '../login/gaurds/authenticate.guard';
import { LoginComponent } from '../login/components/login/login.component';

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

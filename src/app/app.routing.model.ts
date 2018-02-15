import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { TodoTaskComponent } from './todo-task/todo-task.component';
import { TodoTasdonekComponent } from './todo-tasdonek/todo-tasdonek.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuardService } from './auth/auth-guard.service';

const appRoutes: Routes = [
  {
    path: '',
  redirectTo: '/todoTask',
  pathMatch: 'full'
  },
  {
    path: 'todoTask',
    component: TodoTaskComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
  path: 'doneTask',
  component: TodoTasdonekComponent,
  canActivate: [AuthGuardService]

}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
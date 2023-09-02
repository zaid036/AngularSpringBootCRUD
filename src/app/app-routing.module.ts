import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [{
  path: '',
  redirectTo: '',
  pathMatch: 'full'
},
{
  path: 'addUser',
  component: AddUserComponent,
},
{
  path: 'update',
  component: UpdateUserComponent,
},
{
  path: 'userList',
  component: UserListComponent,
},
{
  path: 'details',
  component: ViewUserComponent,
} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

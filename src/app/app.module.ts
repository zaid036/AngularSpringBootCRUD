import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    AddUserComponent,
    UpdateUserComponent,
    ViewUserComponent,
    DeleteUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

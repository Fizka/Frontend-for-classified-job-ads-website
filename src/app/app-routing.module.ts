import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from "./user-list/user-list.component";
import {CreateUserComponent} from "./create-user/create-user.component";
import {SearchUserComponent} from "./search-user/search-user.component";
import {UserSignInComponent} from "./user-sign-in/user-sign-in.component";


const routes: Routes = [
  {path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'user', component: UserListComponent },
  { path: 'add', component: CreateUserComponent },
  { path: 'findbyusertype', component: SearchUserComponent },
  { path: 'login', component: UserSignInComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

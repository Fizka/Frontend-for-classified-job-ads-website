import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from "./user-list/user-list.component";
import {CreateUserComponent} from "./create-user/create-user.component";
import {SearchUserComponent} from "./search-user/search-user.component";
import {UserSignInComponent} from "./user-sign-in/user-sign-in.component";
import {CreateAdvertisementComponent} from "./create-advertisement/create-advertisement.component";
import {AdvertisementBoardComponent} from "./advertisement-board/advertisement-board.component";
import {EmployeeComponent} from "./employee/employee.component";
import {MailSenderComponent} from "./mail-sender/mail-sender.component";
import {ComapnyDetalisComponent} from "./comapny-detalis/comapny-detalis.component";


const routes: Routes = [
  {path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'user', component: UserListComponent },
  { path: 'add', component: CreateUserComponent },
  { path: 'findbyusertype', component: SearchUserComponent },
  { path: 'login', component: UserSignInComponent },
  { path: 'advertisement', component: AdvertisementBoardComponent },
  { path: 'addadvertisement', component: CreateAdvertisementComponent },
  { path: 'company', component: ComapnyDetalisComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'mail', component: MailSenderComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

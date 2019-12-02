import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import {UserListComponent } from './user-list/user-list.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { CreateAdvertisementComponent } from './create-advertisement/create-advertisement.component';
import { MailSenderComponent } from './mail-sender/mail-sender.component';
import { AdvertisementBoardComponent } from './advertisement-board/advertisement-board.component';
import { AdvertisementDetailsComponent } from './advertisement-details/advertisement-details.component';
import { ComapnyDetalisComponent } from './comapny-detalis/comapny-detalis.component';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    UserDetailsComponent,
    UserListComponent,
    SearchUserComponent,
    UserSignInComponent,
    CreateAdvertisementComponent,
    MailSenderComponent,
    AdvertisementBoardComponent,
    AdvertisementDetailsComponent,
    ComapnyDetalisComponent,
    EmployeeComponent
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

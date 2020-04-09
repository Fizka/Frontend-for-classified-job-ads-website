import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
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
import { LogoutComponent } from './logout/logout.component';
import { HeaderComponent } from './header/header.component';
import { CreateAccountCompanyComponent } from './create-account-company/create-account-company.component';
import { CreateAccountCustomerComponent } from './create-account-customer/create-account-customer.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CreateCvComponent } from './create-cv/create-cv.component';
import { CvComponent } from './cv/cv.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { CreateAppliacationComponent } from './create-appliacation/create-appliacation.component';
import { SurveyApplicationComponent } from './survey-application/survey-application.component';
import { CreateSurveyComponent } from './create-survey/create-survey.component';
import { CvDetalisComponent } from './cv-detalis/cv-detalis.component';
import { CvBoardComponent } from './cv-board/cv-board.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CreateCourseCertificateComponent } from './create-course-certificate/create-course-certificate.component';
import { SearchComponent } from './search/search.component';
import { MessageComponent } from './message/message.component';

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
    EmployeeComponent,
    LogoutComponent,
    HeaderComponent,
    CreateAccountCompanyComponent,
    CreateAccountCustomerComponent,
    StatisticsComponent,
    CreateCvComponent,
    CvComponent,
    MailboxComponent,
    CreateAppliacationComponent,
    SurveyApplicationComponent,
    CreateSurveyComponent,
    CvDetalisComponent,
    CvBoardComponent,
    EmployeeDetailsComponent,
    CreateCourseCertificateComponent,
    SearchComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }

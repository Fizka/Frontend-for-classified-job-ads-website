import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CreateUserComponent} from "./components/create-user/create-user.component";
import {UserSignInComponent} from "./components/user-sign-in/user-sign-in.component";
import {UserListComponent} from "./components/user-list/user-list.component";
import {SearchUserComponent} from "./components/search-user/search-user.component";
import {AdvertisementDetailsComponent} from "./components/advertisement-details/advertisement-details.component";
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {CreateAdvertisementComponent} from "./components/create-advertisement/create-advertisement.component";
import {MailSenderComponent} from "./components/mail-sender/mail-sender.component";
import {AdvertisementBoardComponent} from "./components/advertisement-board/advertisement-board.component";
import {ComapnyDetalisComponent} from "./components/comapny-detalis/comapny-detalis.component";
import {EmployeeComponent} from "./components/employee/employee.component";
import {LogoutComponent} from "./components/logout/logout.component";
import {HeaderComponent} from "./components/header/header.component";
import {CreateAccountCompanyComponent} from "./components/create-account-company/create-account-company.component";
import {CreateAppliacationComponent} from "./components/create-appliacation/create-appliacation.component";
import {StatisticsComponent} from "./components/statistics/statistics.component";
import {CreateCvComponent} from "./components/create-cv/create-cv.component";
import {SurveyApplicationComponent} from "./components/survey-application/survey-application.component";
import {CreateSurveyComponent} from "./components/create-survey/create-survey.component";
import {MessageComponent} from "./components/message/message.component";
import {SearchComponent} from "./components/search/search.component";
import {CreateCourseCertificateComponent} from "./components/create-course-certificate/create-course-certificate.component";
import {EmployeeDetailsComponent} from "./components/employee-details/employee-details.component";
import {CvBoardComponent} from "./components/cv-board/cv-board.component";
import {CreateAccountCustomerComponent} from "./components/create-account-customer/create-account-customer.component";
import {MailboxComponent} from "./components/mailbox/mailbox.component";
import {CvDetalisComponent} from "./components/cv-detalis/cv-detalis.component";
import {CvComponent} from "./components/cv/cv.component";


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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

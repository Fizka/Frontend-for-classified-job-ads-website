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
import {LogoutComponent} from "./logout/logout.component";
import {CreateAccountCompanyComponent} from "./create-account-company/create-account-company.component";
import {CreateAccountCustomerComponent} from "./create-account-customer/create-account-customer.component";
import {StatisticsComponent} from "./statistics/statistics.component";
import {CreateCvComponent} from "./create-cv/create-cv.component";
import {CvComponent} from "./cv/cv.component";
import {MailboxComponent} from "./mailbox/mailbox.component";
import {CreateAppliacationComponent} from "./create-appliacation/create-appliacation.component";
import {SurveyApplicationComponent} from "./survey-application/survey-application.component";
import {CreateSurveyComponent} from "./create-survey/create-survey.component";
import {CreateCourseCertificateComponent} from "./create-course-certificate/create-course-certificate.component";
import {SearchComponent} from "./search/search.component";
import {CvBoardComponent} from "./cv-board/cv-board.component";

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
  { path: 'mail', component: MailSenderComponent },
  { path: 'account-company', component: CreateAccountCompanyComponent },
  { path: 'account-customer', component: CreateAccountCustomerComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'cv-create', component: CreateCvComponent },
  { path: 'cv-player', component: CvComponent },
  { path: 'mailbox', component: MailboxComponent },
  { path: 'application', component: CreateAppliacationComponent },
  { path: 'survey-application', component: SurveyApplicationComponent },
  { path: 'survey-create', component: CreateSurveyComponent },
  { path: 'create-course-certificate', component: CreateCourseCertificateComponent },
  { path: 'search', component: SearchComponent },
  { path: 'cv-board', component: CvBoardComponent },
  { path: 'logout', component: LogoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

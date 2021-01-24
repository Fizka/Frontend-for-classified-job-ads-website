import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from "./components/user-list/user-list.component";
import {CreateUserComponent} from "./components/create-user/create-user.component";
import {SearchUserComponent} from "./components/search-user/search-user.component";
import {UserSignInComponent} from "./components/user-sign-in/user-sign-in.component";
import {CreateAdvertisementComponent} from "./components/create-advertisement/create-advertisement.component";
import {AdvertisementBoardComponent} from "./components/advertisement-board/advertisement-board.component";
import {CreateCvComponent} from "./components/create-cv/create-cv.component";
import {MailboxComponent} from "./components/mailbox/mailbox.component";
import {SurveyApplicationComponent} from "./components/survey-application/survey-application.component";
import {CreateCourseCertificateComponent} from "./components/create-course-certificate/create-course-certificate.component";
import {SearchComponent} from "./components/search/search.component";
import {CvBoardComponent} from "./components/cv-board/cv-board.component";
import {LogoutComponent} from "./components/logout/logout.component";
import {CreateSurveyComponent} from "./components/create-survey/create-survey.component";
import {CreateAppliacationComponent} from "./components/create-appliacation/create-appliacation.component";
import {CvComponent} from "./components/cv/cv.component";
import {StatisticsComponent} from "./components/statistics/statistics.component";
import {CreateAccountCustomerComponent} from "./components/create-account-customer/create-account-customer.component";
import {CreateAccountCompanyComponent} from "./components/create-account-company/create-account-company.component";
import {MailSenderComponent} from "./components/mail-sender/mail-sender.component";
import {ComapnyDetalisComponent} from "./components/comapny-detalis/comapny-detalis.component";
import {EmployeeComponent} from "./components/employee/employee.component";


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

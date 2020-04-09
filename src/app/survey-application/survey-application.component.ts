import { Component, OnInit } from '@angular/core';
import {QuestionService} from "../Model/survey/question.service";
import {SurveyService} from "../Model/survey/survey.service";
import {Question} from "../Model/survey/question";
import {Survey} from "../Model/survey/survey";
import {Company} from "../Model/Account/company";

@Component({
  selector: 'app-survey-application',
  templateUrl: './survey-application.component.html',
  styleUrls: ['./survey-application.component.css']
})
export class SurveyApplicationComponent implements OnInit {

  submitted = false;
  question : Question;
  survey : Survey;
  comapny : Company;
  constructor(private questionService : QuestionService, private surveyService : SurveyService ) { }

  ngOnInit() {
  }

  onSubmit(){

  }

}

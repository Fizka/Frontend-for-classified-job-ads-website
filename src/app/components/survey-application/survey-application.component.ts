import {Component, OnInit} from '@angular/core';
import {Company} from "../../model/company";
import {Survey} from "../../model/survey";
import {Question} from "../../model/question";
import {QuestionService} from "../../service/question.service";
import {SurveyService} from "../../service/survey.service";

@Component({
  selector: 'app-survey-application',
  templateUrl: './survey-application.component.html',
  styleUrls: ['./survey-application.component.css']
})
export class SurveyApplicationComponent implements OnInit {

  submitted = false;
  question: Question;
  survey: Survey;
  comapny: Company;

  constructor(private questionService: QuestionService, private surveyService: SurveyService) {
  }

  ngOnInit() {
  }

  onSubmit() {

  }

}

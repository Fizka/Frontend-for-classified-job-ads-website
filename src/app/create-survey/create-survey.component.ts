import { Component, OnInit } from '@angular/core';
import {QuestionService} from "../Model/survey/question.service";
import {SurveyService} from "../Model/survey/survey.service";
import {Question} from "../Model/survey/question";
import {Survey} from "../Model/survey/survey";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.css']
})
export class CreateSurveyComponent implements OnInit {

  submitted = false;
  question : Question;
  survey : Survey;

  constructor(private questionService : QuestionService, private surveyService : SurveyService, private router : Router) { }

  ngOnInit() {
  }

  createQuestion(){
    this.submitted = true;
  }

  //przejście
  GoToKonto(){
    this.router.navigate(['company'])
  }

  onSubmit(){

  }

}

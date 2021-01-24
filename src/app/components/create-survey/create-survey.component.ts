import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Question} from "../../model/question";
import {QuestionService} from "../../service/question.service";
import {SurveyService} from "../../service/survey.service";

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.css']
})
export class CreateSurveyComponent implements OnInit {

  submitted = false;
  question : Question;

  constructor(private questionService : QuestionService, private surveyService : SurveyService, private router : Router) { }

  ngOnInit() {
  }

  createQuestion(){
    this.submitted = true;
  }

  GoToKonto(){
    this.router.navigate(['company'])
  }

  onSubmit(){
  }

}

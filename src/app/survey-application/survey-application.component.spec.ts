import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyApplicationComponent } from './survey-application.component';

describe('SurveyApplicationComponent', () => {
  let component: SurveyApplicationComponent;
  let fixture: ComponentFixture<SurveyApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

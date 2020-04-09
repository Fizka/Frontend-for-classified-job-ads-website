import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvBoardComponent } from './cv-board.component';

describe('CvBoardComponent', () => {
  let component: CvBoardComponent;
  let fixture: ComponentFixture<CvBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

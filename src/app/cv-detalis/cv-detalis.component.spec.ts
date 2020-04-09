import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvDetalisComponent } from './cv-detalis.component';

describe('CvDetalisComponent', () => {
  let component: CvDetalisComponent;
  let fixture: ComponentFixture<CvDetalisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvDetalisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

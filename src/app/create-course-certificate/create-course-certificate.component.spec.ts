import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCourseCertificateComponent } from './create-course-certificate.component';

describe('CreateCourseCertificateComponent', () => {
  let component: CreateCourseCertificateComponent;
  let fixture: ComponentFixture<CreateCourseCertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCourseCertificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCourseCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

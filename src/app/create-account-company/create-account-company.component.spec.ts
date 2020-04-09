import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountCompanyComponent } from './create-account-company.component';

describe('CreateAccountCompanyComponent', () => {
  let component: CreateAccountCompanyComponent;
  let fixture: ComponentFixture<CreateAccountCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAccountCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

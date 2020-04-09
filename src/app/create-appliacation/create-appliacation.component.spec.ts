import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAppliacationComponent } from './create-appliacation.component';

describe('CreateAppliacationComponent', () => {
  let component: CreateAppliacationComponent;
  let fixture: ComponentFixture<CreateAppliacationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAppliacationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAppliacationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

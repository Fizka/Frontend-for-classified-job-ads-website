import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComapnyDetalisComponent } from './comapny-detalis.component';

describe('ComapnyDetalisComponent', () => {
  let component: ComapnyDetalisComponent;
  let fixture: ComponentFixture<ComapnyDetalisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComapnyDetalisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComapnyDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

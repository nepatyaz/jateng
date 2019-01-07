import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckTaspenComponent } from './check-taspen.component';

describe('CheckTaspenComponent', () => {
  let component: CheckTaspenComponent;
  let fixture: ComponentFixture<CheckTaspenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckTaspenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckTaspenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

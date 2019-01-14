import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TellerInComponent } from './teller-in.component';

describe('TellerInComponent', () => {
  let component: TellerInComponent;
  let fixture: ComponentFixture<TellerInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TellerInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TellerInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

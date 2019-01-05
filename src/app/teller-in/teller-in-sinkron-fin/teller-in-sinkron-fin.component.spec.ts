import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TellerInSinkronFinComponent } from './teller-in-sinkron-fin.component';

describe('TellerInSinkronFinComponent', () => {
  let component: TellerInSinkronFinComponent;
  let fixture: ComponentFixture<TellerInSinkronFinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TellerInSinkronFinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TellerInSinkronFinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

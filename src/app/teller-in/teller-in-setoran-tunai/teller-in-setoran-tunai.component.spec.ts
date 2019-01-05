import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TellerInSetoranTunaiComponent } from './teller-in-setoran-tunai.component';

describe('TellerInSetoranTunaiComponent', () => {
  let component: TellerInSetoranTunaiComponent;
  let fixture: ComponentFixture<TellerInSetoranTunaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TellerInSetoranTunaiComponent ]
    })
    .compileComponents(); 
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TellerInSetoranTunaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

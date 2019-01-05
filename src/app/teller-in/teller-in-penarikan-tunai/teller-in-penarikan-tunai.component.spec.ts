import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TellerInPenarikanTunaiComponent } from './teller-in-penarikan-tunai.component';

describe('TellerInPenarikanTunaiComponent', () => {
  let component: TellerInPenarikanTunaiComponent;
  let fixture: ComponentFixture<TellerInPenarikanTunaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TellerInPenarikanTunaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TellerInPenarikanTunaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

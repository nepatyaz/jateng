import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TellerInSelisihKasComponent } from './teller-in-selisih-kas.component';
describe('TellerInSelisihKasComponent', () => {
  let component: TellerInSelisihKasComponent;
  let fixture: ComponentFixture<TellerInSelisihKasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TellerInSelisihKasComponent ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(TellerInSelisihKasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

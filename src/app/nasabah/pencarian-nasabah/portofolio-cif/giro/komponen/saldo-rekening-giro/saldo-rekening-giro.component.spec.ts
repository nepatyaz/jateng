import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaldoRekeningGiroComponent } from './saldo-rekening-giro.component';

describe('SaldoRekeningGiroComponent', () => {
  let component: SaldoRekeningGiroComponent;
  let fixture: ComponentFixture<SaldoRekeningGiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaldoRekeningGiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaldoRekeningGiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

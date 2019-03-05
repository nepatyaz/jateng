import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiwayatSaldoGiroComponent } from './riwayat-saldo-giro.component';

describe('RiwayatSaldoGiroComponent', () => {
  let component: RiwayatSaldoGiroComponent;
  let fixture: ComponentFixture<RiwayatSaldoGiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiwayatSaldoGiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiwayatSaldoGiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

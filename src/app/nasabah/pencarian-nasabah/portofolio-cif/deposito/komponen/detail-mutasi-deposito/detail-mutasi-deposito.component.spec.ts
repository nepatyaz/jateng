import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMutasiDepositoComponent } from './detail-mutasi-deposito.component';

describe('DetailMutasiDepositoComponent', () => {
  let component: DetailMutasiDepositoComponent;
  let fixture: ComponentFixture<DetailMutasiDepositoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailMutasiDepositoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMutasiDepositoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

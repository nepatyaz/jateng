import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TellerInTranPindahBukuComponent } from './teller-in-tran-pindah-buku.component';

describe('TellerInTranPindahBukuComponent', () => {
  let component: TellerInTranPindahBukuComponent;
  let fixture: ComponentFixture<TellerInTranPindahBukuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TellerInTranPindahBukuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TellerInTranPindahBukuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TellerInPindahBukuBedaUangComponent } from './teller-in-pindah-buku-beda-uang.component';

describe('TellerInPindahBukuBedaUangComponent', () => {
  let component: TellerInPindahBukuBedaUangComponent;
  let fixture: ComponentFixture<TellerInPindahBukuBedaUangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TellerInPindahBukuBedaUangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TellerInPindahBukuBedaUangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

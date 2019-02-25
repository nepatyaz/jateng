import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtorisasiCifComponent } from './otorisasi-cif.component';

describe('OtorisasiCifComponent', () => {
  let component: OtorisasiCifComponent;
  let fixture: ComponentFixture<OtorisasiCifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtorisasiCifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtorisasiCifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

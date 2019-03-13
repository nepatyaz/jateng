import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PencarianNasabahPerusahaanComponent } from './pencarian-nasabah-perusahaan.component';

describe('PencarianNasabahPerusahaanComponent', () => {
  let component: PencarianNasabahPerusahaanComponent;
  let fixture: ComponentFixture<PencarianNasabahPerusahaanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PencarianNasabahPerusahaanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PencarianNasabahPerusahaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

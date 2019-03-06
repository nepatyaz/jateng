import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AktifitasPinjamanComponent } from './aktifitas-pinjaman.component';

describe('AktifitasPinjamanComponent', () => {
  let component: AktifitasPinjamanComponent;
  let fixture: ComponentFixture<AktifitasPinjamanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AktifitasPinjamanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AktifitasPinjamanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

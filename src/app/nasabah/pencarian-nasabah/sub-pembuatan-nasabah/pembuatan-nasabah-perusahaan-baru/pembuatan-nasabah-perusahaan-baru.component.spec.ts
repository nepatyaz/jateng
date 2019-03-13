import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PembuatanNasabahPerusahaanBaruComponent } from './pembuatan-nasabah-perusahaan-baru.component';

describe('PembuatanNasabahPerusahaanBaruComponent', () => {
  let component: PembuatanNasabahPerusahaanBaruComponent;
  let fixture: ComponentFixture<PembuatanNasabahPerusahaanBaruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PembuatanNasabahPerusahaanBaruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PembuatanNasabahPerusahaanBaruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PembuatanNasabahPeroranganBaruComponent } from './pembuatan-nasabah-perorangan-baru.component';

describe('PembuatanNasabahPeroranganBaruComponent', () => {
  let component: PembuatanNasabahPeroranganBaruComponent;
  let fixture: ComponentFixture<PembuatanNasabahPeroranganBaruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PembuatanNasabahPeroranganBaruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PembuatanNasabahPeroranganBaruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

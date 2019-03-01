import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PencarianDaftarHitamComponent } from './pencarian-daftar-hitam.component';

describe('PencarianDaftarHitamComponent', () => {
  let component: PencarianDaftarHitamComponent;
  let fixture: ComponentFixture<PencarianDaftarHitamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PencarianDaftarHitamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PencarianDaftarHitamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

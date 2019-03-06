import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarBiayaCoComponent } from './daftar-biaya-co.component';

describe('DaftarBiayaCoComponent', () => {
  let component: DaftarBiayaCoComponent;
  let fixture: ComponentFixture<DaftarBiayaCoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaftarBiayaCoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarBiayaCoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

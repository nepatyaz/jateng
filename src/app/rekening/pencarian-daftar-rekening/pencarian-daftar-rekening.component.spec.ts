import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PencarianDaftarRekeningComponent } from './pencarian-daftar-rekening.component';

describe('PencarianDaftarRekeningComponent', () => {
  let component: PencarianDaftarRekeningComponent;
  let fixture: ComponentFixture<PencarianDaftarRekeningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PencarianDaftarRekeningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PencarianDaftarRekeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

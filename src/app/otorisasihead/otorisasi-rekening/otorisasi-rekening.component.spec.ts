import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtorisasiRekeningComponent } from './otorisasi-rekening.component';

describe('OtorisasiRekeningComponent', () => {
  let component: OtorisasiRekeningComponent;
  let fixture: ComponentFixture<OtorisasiRekeningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtorisasiRekeningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtorisasiRekeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

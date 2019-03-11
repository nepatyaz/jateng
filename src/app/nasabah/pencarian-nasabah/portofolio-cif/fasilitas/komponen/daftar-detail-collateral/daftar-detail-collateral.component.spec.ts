import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarDetailCollateralComponent } from './daftar-detail-collateral.component';

describe('DaftarDetailCollateralComponent', () => {
  let component: DaftarDetailCollateralComponent;
  let fixture: ComponentFixture<DaftarDetailCollateralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaftarDetailCollateralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarDetailCollateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

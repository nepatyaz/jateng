import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuatNasabahCorporateComponent } from './buat-nasabah-corporate.component';

describe('BuatNasabahCorporateComponent', () => {
  let component: BuatNasabahCorporateComponent;
  let fixture: ComponentFixture<BuatNasabahCorporateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuatNasabahCorporateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuatNasabahCorporateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

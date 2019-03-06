import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataUmumPinjamanComponent } from './data-umum-pinjaman.component';

describe('DataUmumPinjamanComponent', () => {
  let component: DataUmumPinjamanComponent;
  let fixture: ComponentFixture<DataUmumPinjamanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataUmumPinjamanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataUmumPinjamanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

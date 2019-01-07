import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CetakPassbookComponent } from './cetak-passbook.component';

describe('CetakPassbookComponent', () => {
  let component: CetakPassbookComponent;
  let fixture: ComponentFixture<CetakPassbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CetakPassbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CetakPassbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

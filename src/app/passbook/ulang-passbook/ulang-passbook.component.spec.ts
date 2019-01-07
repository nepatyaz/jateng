import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UlangPassbookComponent } from './ulang-passbook.component';

describe('UlangPassbookComponent', () => {
  let component: UlangPassbookComponent;
  let fixture: ComponentFixture<UlangPassbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UlangPassbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UlangPassbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

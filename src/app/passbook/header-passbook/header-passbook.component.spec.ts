import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPassbookComponent } from './header-passbook.component';

describe('HeaderPassbookComponent', () => {
  let component: HeaderPassbookComponent;
  let fixture: ComponentFixture<HeaderPassbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderPassbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPassbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

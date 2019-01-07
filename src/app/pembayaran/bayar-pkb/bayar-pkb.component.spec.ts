import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BayarPKBComponent } from './bayar-pkb.component';

describe('BayarPKBComponent', () => {
  let component: BayarPKBComponent;
  let fixture: ComponentFixture<BayarPKBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BayarPKBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BayarPKBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

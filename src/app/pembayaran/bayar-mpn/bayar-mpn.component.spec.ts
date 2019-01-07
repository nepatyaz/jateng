import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BayarMPNComponent } from './bayar-mpn.component';

describe('BayarMPNComponent', () => {
  let component: BayarMPNComponent;
  let fixture: ComponentFixture<BayarMPNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BayarMPNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BayarMPNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

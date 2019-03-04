import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BungaPrkGiroComponent } from './bunga-prk-giro.component';

describe('BungaPrkGiroComponent', () => {
  let component: BungaPrkGiroComponent;
  let fixture: ComponentFixture<BungaPrkGiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BungaPrkGiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BungaPrkGiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

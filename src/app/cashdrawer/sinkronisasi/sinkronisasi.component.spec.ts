import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinkronisasiComponent } from './sinkronisasi.component';

describe('SinkronisasiComponent', () => {
  let component: SinkronisasiComponent;
  let fixture: ComponentFixture<SinkronisasiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinkronisasiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinkronisasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

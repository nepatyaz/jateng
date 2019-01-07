import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DenominasiComponent } from './denominasi.component';

describe('DenominasiComponent', () => {
  let component: DenominasiComponent;
  let fixture: ComponentFixture<DenominasiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DenominasiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DenominasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

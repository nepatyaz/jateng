import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelasiCifComponent } from './relasi-cif.component';

describe('RelasiCifComponent', () => {
  let component: RelasiCifComponent;
  let fixture: ComponentFixture<RelasiCifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelasiCifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelasiCifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

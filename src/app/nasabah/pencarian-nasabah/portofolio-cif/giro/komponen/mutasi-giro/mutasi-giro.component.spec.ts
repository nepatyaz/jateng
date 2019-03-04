import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MutasiGiroComponent } from './mutasi-giro.component';

describe('MutasiGiroComponent', () => {
  let component: MutasiGiroComponent;
  let fixture: ComponentFixture<MutasiGiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MutasiGiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MutasiGiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

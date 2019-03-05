import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAdministrasiGiroComponent } from './data-administrasi-giro.component';

describe('DataAdministrasiGiroComponent', () => {
  let component: DataAdministrasiGiroComponent;
  let fixture: ComponentFixture<DataAdministrasiGiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataAdministrasiGiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataAdministrasiGiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

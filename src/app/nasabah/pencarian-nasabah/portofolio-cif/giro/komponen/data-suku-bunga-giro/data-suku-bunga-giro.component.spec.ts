import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSukuBungaGiroComponent } from './data-suku-bunga-giro.component';

describe('DataSukuBungaGiroComponent', () => {
  let component: DataSukuBungaGiroComponent;
  let fixture: ComponentFixture<DataSukuBungaGiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataSukuBungaGiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSukuBungaGiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

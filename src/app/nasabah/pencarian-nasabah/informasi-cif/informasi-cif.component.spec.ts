import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformasiCifComponent } from './informasi-cif.component';

describe('InformasiCifComponent', () => {
  let component: InformasiCifComponent;
  let fixture: ComponentFixture<InformasiCifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformasiCifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformasiCifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

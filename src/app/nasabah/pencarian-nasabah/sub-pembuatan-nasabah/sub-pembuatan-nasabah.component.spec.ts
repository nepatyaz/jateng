import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPembuatanNasabahComponent } from './sub-pembuatan-nasabah.component';

describe('SubPembuatanNasabahComponent', () => {
  let component: SubPembuatanNasabahComponent;
  let fixture: ComponentFixture<SubPembuatanNasabahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubPembuatanNasabahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubPembuatanNasabahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

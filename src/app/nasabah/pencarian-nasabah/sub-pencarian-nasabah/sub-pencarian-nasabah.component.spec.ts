import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPencarianNasabahComponent } from './sub-pencarian-nasabah.component';

describe('SubPencarianNasabahComponent', () => {
  let component: SubPencarianNasabahComponent;
  let fixture: ComponentFixture<SubPencarianNasabahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubPencarianNasabahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubPencarianNasabahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

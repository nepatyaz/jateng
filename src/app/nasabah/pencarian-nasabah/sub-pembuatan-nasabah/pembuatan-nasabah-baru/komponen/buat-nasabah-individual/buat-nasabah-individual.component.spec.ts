import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuatNasabahIndividualComponent } from './buat-nasabah-individual.component';

describe('BuatNasabahIndividualComponent', () => {
  let component: BuatNasabahIndividualComponent;
  let fixture: ComponentFixture<BuatNasabahIndividualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuatNasabahIndividualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuatNasabahIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

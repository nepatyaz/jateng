import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PencarianNasabahIndividuComponent } from './pencarian-nasabah-individu.component';

describe('PencarianNasabahIndividuComponent', () => {
  let component: PencarianNasabahIndividuComponent;
  let fixture: ComponentFixture<PencarianNasabahIndividuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PencarianNasabahIndividuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PencarianNasabahIndividuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

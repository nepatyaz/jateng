import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FasilitasNasabahComponent } from './fasilitas-nasabah.component';

describe('FasilitasNasabahComponent', () => {
  let component: FasilitasNasabahComponent;
  let fixture: ComponentFixture<FasilitasNasabahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FasilitasNasabahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FasilitasNasabahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

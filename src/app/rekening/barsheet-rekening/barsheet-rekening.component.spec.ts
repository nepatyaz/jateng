import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarsheetRekeningComponent } from './barsheet-rekening.component';

describe('BarsheetRekeningComponent', () => {
  let component: BarsheetRekeningComponent;
  let fixture: ComponentFixture<BarsheetRekeningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarsheetRekeningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarsheetRekeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

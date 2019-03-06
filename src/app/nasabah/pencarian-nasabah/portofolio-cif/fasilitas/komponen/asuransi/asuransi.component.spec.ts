import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsuransiComponent } from './asuransi.component';

describe('AsuransiComponent', () => {
  let component: AsuransiComponent;
  let fixture: ComponentFixture<AsuransiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsuransiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsuransiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

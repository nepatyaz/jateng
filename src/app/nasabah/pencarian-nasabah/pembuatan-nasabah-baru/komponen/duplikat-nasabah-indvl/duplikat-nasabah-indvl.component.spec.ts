import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplikatNasabahIndvlComponent } from './duplikat-nasabah-indvl.component';

describe('DuplikatNasabahIndvlComponent', () => {
  let component: DuplikatNasabahIndvlComponent;
  let fixture: ComponentFixture<DuplikatNasabahIndvlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuplikatNasabahIndvlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuplikatNasabahIndvlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

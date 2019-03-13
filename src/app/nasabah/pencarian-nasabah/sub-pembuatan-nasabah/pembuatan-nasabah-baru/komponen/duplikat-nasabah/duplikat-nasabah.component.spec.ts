import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplikatNasabahComponent } from './duplikat-nasabah.component';

describe('DuplikatNasabahComponent', () => {
  let component: DuplikatNasabahComponent;
  let fixture: ComponentFixture<DuplikatNasabahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuplikatNasabahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuplikatNasabahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

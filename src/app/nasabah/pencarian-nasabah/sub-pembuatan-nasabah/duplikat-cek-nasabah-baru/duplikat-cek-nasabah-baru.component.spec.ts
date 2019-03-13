import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplikatCekNasabahBaruComponent } from './duplikat-cek-nasabah-baru.component';

describe('DuplikatCekNasabahBaruComponent', () => {
  let component: DuplikatCekNasabahBaruComponent;
  let fixture: ComponentFixture<DuplikatCekNasabahBaruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuplikatCekNasabahBaruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuplikatCekNasabahBaruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PembuatanNasabahBaruComponent } from './pembuatan-nasabah-baru.component';

describe('PembuatanNasabahBaruaComponent', () => {
  let component: PembuatanNasabahBaruComponent;
  let fixture: ComponentFixture<PembuatanNasabahBaruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PembuatanNasabahBaruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PembuatanNasabahBaruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

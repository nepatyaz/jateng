import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlamatTambahanComponent } from './alamat-tambahan.component';

describe('AlamatTambahanComponent', () => {
  let component: AlamatTambahanComponent;
  let fixture: ComponentFixture<AlamatTambahanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlamatTambahanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlamatTambahanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

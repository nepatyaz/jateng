import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CariBaruUserComponent } from './cari-baru-user.component';

describe('CariBaruUserComponent', () => {
  let component: CariBaruUserComponent;
  let fixture: ComponentFixture<CariBaruUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CariBaruUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CariBaruUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

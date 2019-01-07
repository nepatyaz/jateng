import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CariKartuatmComponent } from './cari-kartuatm.component';

describe('CariKartuatmComponent', () => {
  let component: CariKartuatmComponent;
  let fixture: ComponentFixture<CariKartuatmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CariKartuatmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CariKartuatmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

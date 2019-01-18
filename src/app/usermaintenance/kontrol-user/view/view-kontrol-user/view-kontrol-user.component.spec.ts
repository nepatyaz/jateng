import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewKontrolUserComponent } from './view-kontrol-user.component';

describe('ViewKontrolUserComponent', () => {
  let component: ViewKontrolUserComponent;
  let fixture: ComponentFixture<ViewKontrolUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewKontrolUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewKontrolUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

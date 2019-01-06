import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KontrolUserComponent } from './kontrol-user.component';

describe('KontrolUserComponent', () => {
  let component: KontrolUserComponent;
  let fixture: ComponentFixture<KontrolUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KontrolUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KontrolUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

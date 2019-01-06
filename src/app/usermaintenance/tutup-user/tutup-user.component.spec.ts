import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutupUserComponent } from './tutup-user.component';

describe('TutupUserComponent', () => {
  let component: TutupUserComponent;
  let fixture: ComponentFixture<TutupUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutupUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutupUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDepositoBerjangkaComponent } from './data-deposito-berjangka.component';

describe('DataDepositoBerjangkaComponent', () => {
  let component: DataDepositoBerjangkaComponent;
  let fixture: ComponentFixture<DataDepositoBerjangkaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataDepositoBerjangkaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDepositoBerjangkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

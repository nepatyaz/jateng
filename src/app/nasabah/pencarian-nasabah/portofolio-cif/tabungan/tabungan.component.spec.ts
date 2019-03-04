import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabunganComponent } from './tabungan.component';

describe('TabunganComponent', () => {
  let component: TabunganComponent;
  let fixture: ComponentFixture<TabunganComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabunganComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabunganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabskartuComponent } from './tabskartu.component';

describe('TabskartuComponent', () => {
  let component: TabskartuComponent;
  let fixture: ComponentFixture<TabskartuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabskartuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabskartuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BungaCerukanGiroComponent } from './bunga-cerukan-giro.component';

describe('BungaCerukanGiroComponent', () => {
  let component: BungaCerukanGiroComponent;
  let fixture: ComponentFixture<BungaCerukanGiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BungaCerukanGiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BungaCerukanGiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

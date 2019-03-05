import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BungaJasaGiroGiroComponent } from './bunga-jasa-giro-giro.component';

describe('BungaJasaGiroGiroComponent', () => {
  let component: BungaJasaGiroGiroComponent;
  let fixture: ComponentFixture<BungaJasaGiroGiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BungaJasaGiroGiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BungaJasaGiroGiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

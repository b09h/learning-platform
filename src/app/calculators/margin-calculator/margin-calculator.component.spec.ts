import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarginCalculatorComponent } from './margin-calculator.component';

describe('MarginCalculatorComponent', () => {
  let component: MarginCalculatorComponent;
  let fixture: ComponentFixture<MarginCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarginCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarginCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

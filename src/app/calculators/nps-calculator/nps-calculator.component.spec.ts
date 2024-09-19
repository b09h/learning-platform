import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsCalculatorComponent } from './nps-calculator.component';

describe('NpsCalculatorComponent', () => {
  let component: NpsCalculatorComponent;
  let fixture: ComponentFixture<NpsCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NpsCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NpsCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

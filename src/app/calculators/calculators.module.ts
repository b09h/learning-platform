import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorsRoutingModule } from './calculators-routing.module';
import { CalculatorsComponent } from './calculators.component';
import { SipCalculatorComponent } from './sip-calculator/sip-calculator.component';
import { PpfCalculatorComponent } from './ppf-calculator/ppf-calculator.component';
import { MarginCalculatorComponent } from './margin-calculator/margin-calculator.component';
import { SwpCalculatorComponent } from './swp-calculator/swp-calculator.component';
import { FdCalculatorComponent } from './fd-calculator/fd-calculator.component';
import { RdCalculatorComponent } from './rd-calculator/rd-calculator.component';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';
import { NpsCalculatorComponent } from './nps-calculator/nps-calculator.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CalculatorsComponent,
    SipCalculatorComponent,
    PpfCalculatorComponent,
    MarginCalculatorComponent,
    SwpCalculatorComponent,
    FdCalculatorComponent,
    RdCalculatorComponent,
    EmiCalculatorComponent,
    NpsCalculatorComponent
  ],
  imports: [
    CommonModule,
    CalculatorsRoutingModule,
    SharedModule
  ]
})
export class CalculatorsModule { }

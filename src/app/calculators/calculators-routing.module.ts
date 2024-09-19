import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SipCalculatorComponent } from './sip-calculator/sip-calculator.component';
import { PpfCalculatorComponent } from './ppf-calculator/ppf-calculator.component';
import { MarginCalculatorComponent } from './margin-calculator/margin-calculator.component';
import { SwpCalculatorComponent } from './swp-calculator/swp-calculator.component';
import { FdCalculatorComponent } from './fd-calculator/fd-calculator.component';
import { RdCalculatorComponent } from './rd-calculator/rd-calculator.component';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';
import { NpsCalculatorComponent } from './nps-calculator/nps-calculator.component';

const routes: Routes = [
  { path: 'sip', component: SipCalculatorComponent },
  { path: 'ppf', component: PpfCalculatorComponent },
  { path: 'margin', component: MarginCalculatorComponent },
  { path: 'swp', component: SwpCalculatorComponent },
  { path: 'fd', component: FdCalculatorComponent },
  { path: 'rd', component: RdCalculatorComponent },
  { path: 'emi', component: EmiCalculatorComponent },
  { path: 'nps', component: NpsCalculatorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculatorsRoutingModule {}

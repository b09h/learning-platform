import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // For ngModel in Slider
import { NgxEchartsModule } from 'ngx-echarts'; // Import EChartsModule
import { EchartsComponent } from './echarts/echarts.component';
import { SliderComponent } from './slider/slider.component';
import { ToggleComponent } from './toggle/toggle.component';

@NgModule({
  declarations: [
    SliderComponent,
    ToggleComponent,
    EchartsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxEchartsModule.forRoot({
      // Optional: you can provide a default configuration here if needed
      echarts: () => import('echarts')
    }),
  ],
  exports: [
    SliderComponent,
    ToggleComponent,
    EchartsComponent
  ]
})
export class SharedModule {}

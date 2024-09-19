import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() step: number = 1;
  @Input() value: number = 0;
  @Input() showTicks: boolean = false;
  @Input() ticks: number[] = [];
  @Input() label: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}

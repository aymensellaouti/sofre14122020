import { Component, DoCheck, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit, OnDestroy, DoCheck {
  @Input() defaultColor = 'lightblue';
  color = this.defaultColor;
  constructor() {}
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngOnInit(): void {}
  ngOnDestroy() {
    console.log('destroy');
  }
  changeColor(newColor) {
    this.color = newColor;
  }
}

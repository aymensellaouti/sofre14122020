import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit, OnDestroy {
  @Input() defaultColor = 'lightblue';
  color = this.defaultColor;
  constructor() {}

  ngOnInit(): void {}
  ngOnDestroy() {
    console.log('destroy');
  }
  changeColor(newColor) {
    this.color = newColor;
  }
}

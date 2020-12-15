import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css'],
})
export class WordComponent implements OnInit {
  color = 'green';
  font = 'arail';
  align = 'right';
  size = 45;
  constructor() {}

  ngOnInit(): void {}

  aligner(align) {
    this.align = align;
  }
}

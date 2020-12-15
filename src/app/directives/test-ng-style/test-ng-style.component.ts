import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ng-style',
  templateUrl: './test-ng-style.component.html',
  styleUrls: ['./test-ng-style.component.css'],
})
export class TestNgStyleComponent implements OnInit {
  @Input() bgc = 'lightblue';
  @Input() color = 'gold';
  @Input() font = 'arial';
  constructor() {}

  ngOnInit(): void {}
}

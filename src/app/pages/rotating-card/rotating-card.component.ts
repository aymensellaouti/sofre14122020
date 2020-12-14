import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rotating-card',
  templateUrl: './rotating-card.component.html',
  styleUrls: ['./rotating-card.component.css'],
})
export class RotatingCardComponent implements OnInit {
  firstname = 'aymen';
  name = 'sellaouti';
  job = 'teacher';
  path = 'rotating_card_profile3.png';
  constructor() {}

  ngOnInit(): void {}
}

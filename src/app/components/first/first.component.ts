import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  name = 'aymen';
  color = 'red';
  isHidden = true;
  buttonText = 'afficher';
  constructor() {}
  ngOnInit(): void {}

  showHide(input) {
    console.log(input);
    this.isHidden = !this.isHidden;
    this.buttonText === 'afficher'
      ? (this.buttonText = 'cacher')
      : (this.buttonText = 'afficher');
  }
}

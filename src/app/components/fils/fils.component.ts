import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css'],
})
export class FilsComponent implements OnInit {
  @Input() message = 'je suis le message du fils';
  @Output() sendDataToDad = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  /*
    1 créer un event
    2 préparer quand emmtre l'evenement
    3 emmtre l'event ey cacher les data
  */
  sendData() {
    this.sendDataToDad.emit('cc papa');
  }
}

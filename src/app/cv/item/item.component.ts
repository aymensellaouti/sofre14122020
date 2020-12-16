import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() personne: Personne;
  @Input() size = 50;
  @Output() selectPersonneEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  selectPersonne() {
    this.selectPersonneEvent.emit(
      this.personne
    );
  }
}

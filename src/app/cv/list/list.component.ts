import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  personnes: Personne[] = [];
  @Output() forwardPersonneEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    this.personnes = [
      new Personne(1, 'aymen', 'sellaouti', 38, 14258, 'Teacher', 'as.jpg'),
      new Personne(
        2,
        'Khaoula',
        'aboud',
        20,
        22222,
        'Ingénieur',
        'rotating_card_profile.png'
      ),
    ];
  }
  forwardPersonne(personne: Personne) {
    this.forwardPersonneEvent.emit(personne);
  }
}

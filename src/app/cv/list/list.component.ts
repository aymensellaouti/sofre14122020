import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  personnes: Personne[] = [];
  /* names = ['chouaib', 'aymen'];
  test = ['version1', '12345', 'version2', '456789']; */
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
        '             '
      ),
      new Personne(3, 'Khaoula', 'aboud', 20, 22222, 'Ingénieur', ''),
    ];
  }
  forwardPersonne(personne: Personne) {
    this.forwardPersonneEvent.emit(personne);
  }
}

import { Injectable } from '@angular/core';
import { Personne } from '../model/personne';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private personnes: Personne[] = [];
  constructor() {
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

  getPersonnes(): Personne[] {
    return this.personnes;
  }
}

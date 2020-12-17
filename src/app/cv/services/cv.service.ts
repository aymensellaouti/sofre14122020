import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Personne } from '../model/personne';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private personnes: Personne[] = [];
  public clickItemSubject = new Subject<Personne>();
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
  selectPersonne(personne: Personne) {
    this.clickItemSubject.next(personne);
  }
  getPersonnes(): Personne[] {
    return this.personnes;
  }

  findPersonneById(id: number): Personne {
    return this.personnes.find((personne) => personne.id === id);
  }

  deletePersonne(personne: Personne): boolean {
    const index = this.personnes.indexOf(personne);
    if (index > -1) {
      this.personnes.splice(index, 1);
      return true;
    }
    return false;
  }

  addPersonne(personne: Personne) {
    personne.id = this.personnes[this.personnes.length - 1].id + 1;
    this.personnes.push(personne);
  }
}

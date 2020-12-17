import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Personne } from '../model/personne';
const API_PERSONNE_LINK =
  'https://immense-citadel-91115.herokuapp.com/api/personnes/';
@Injectable({
  providedIn: 'root',
})
export class CvService {
  private personnes: Personne[] = [];
  public clickItemSubject = new Subject<Personne>();
  constructor(private http: HttpClient) {
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
  getFAkePersonnes(): Personne[] {
    return this.personnes;
  }
  getPersonnes(): Observable<Personne[]> {
    return this.http.get<Personne[]>(API_PERSONNE_LINK);
  }

  findFakePersonneById(id: number): Personne {
    return this.personnes.find((personne) => personne.id === id);
  }

  findPersonneById(id: number): Observable<Personne> {
    return this.http.get<Personne>(API_PERSONNE_LINK + id);
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

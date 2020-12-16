import { Injectable } from '@angular/core';
import { Personne } from '../model/personne';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  private embauches: Personne[] = [];
  constructor() {}

  embaucher(personne: Personne): boolean {
    const index = this.embauches.indexOf(personne);
    if (index === -1) {
      this.embauches.push(personne);
      return true;
    }
    return false;
  }

  getEmbauches(): Personne[] {
    return this.embauches;
  }
}

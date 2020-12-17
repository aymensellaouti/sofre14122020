import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Personne } from '../model/personne';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  personnes: Personne[] = [];
  /* names = ['chouaib', 'aymen'];
  test = ['version1', '12345', 'version2', '456789']; */
  /*   @Output() forwardPersonneEvent = new EventEmitter(); */
  constructor(private cvService: CvService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.cvService.getPersonnes().subscribe(
      (personnes) => {
        this.personnes = personnes;
        this.toastr.success('Cvs récupérés avec succès');
      },
      (erreur) => {
        this.personnes = this.cvService.getFAkePersonnes();
        this.toastr.error(
          'Problème de connexion à la base de données. Les données sont Fake'
        );
      }
    );
  }
  /*   forwardPersonne(personne: Personne) {
    this.forwardPersonneEvent.emit(personne);
  } */
}

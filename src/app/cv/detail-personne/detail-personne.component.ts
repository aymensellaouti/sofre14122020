import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from '../model/personne';
import { CvService } from './../services/cv.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detail-personne',
  templateUrl: './detail-personne.component.html',
  styleUrls: ['./detail-personne.component.css'],
})
export class DetailPersonneComponent implements OnInit {
  personne: Personne;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.personne = this.cvService.findPersonneById(+params.id);
      if (!this.personne) {
        this.toastr.error(`la personne d'id ${params.id} n'existe pas`);
        this.router.navigate(['cv']);
      }
    });
  }
  deletePersonne() {
    this.toastr.success(`${this.personne.name} supprimé avec succès`);
    this.cvService.deletePersonne(this.personne);
    this.router.navigate(['cv']);
  }
}

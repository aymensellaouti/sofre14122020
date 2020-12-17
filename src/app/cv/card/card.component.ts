import { Component, Input, OnInit } from '@angular/core';
import { Personne } from '../model/personne';
import { EmbaucheService } from '../services/embauche.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CvService } from './../services/cv.service';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  personne: Personne;
  constructor(
    private embaucheService: EmbaucheService,
    private toastr: ToastrService,
    private router: Router,
    private cvService: CvService
  ) {}

  ngOnInit(): void {
    this.cvService.clickItemSubject
      .pipe(distinctUntilChanged())
      .subscribe((personne) => {
        this.personne = personne;
        console.log('click');
      });
  }
  embaucher() {
    if (!this.embaucheService.embaucher(this.personne)) {
      this.toastr.warning(`${this.personne.name} est déjà embauché`);
    } else {
      this.toastr.success(
        `${this.personne.name} a été ajouté à la liste des embauchés`
      );
    }
  }
  details() {
    this.router.navigate(['cv', this.personne.id]);
  }
}

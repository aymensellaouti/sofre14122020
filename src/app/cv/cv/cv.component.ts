import { Component, OnInit, ViewChild } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';
import { ListComponent } from '../list/list.component';
import { Personne } from './../model/personne';
import { CvService } from './../services/cv.service';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  /*   selectedPersonne: Personne = null; */
  constructor(
    private loggerService: LoggerService,
    private cvService: CvService
  ) {}
  nbClick = 0;
  @ViewChild(ListComponent) list: ListComponent;
  ngOnInit(): void {
    this.loggerService.logger('cc je suis le cvComponent');
    this.cvService.clickItemSubject
      .pipe(distinctUntilChanged())
      .subscribe((personne) => this.nbClick++);
  }
  /*   selectPersonne(personne: Personne) {
    this.selectedPersonne = personne;
        console.log(this.list);
  } */
}

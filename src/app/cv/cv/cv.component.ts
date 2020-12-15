import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';
import { Personne } from './../model/personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  selectedPersonne: Personne = null;
  constructor(private loggerService: LoggerService) {}

  ngOnInit(): void {
    this.loggerService.logger('cc je suis le cvComponent');
  }
  selectPersonne(personne: Personne) {
    this.selectedPersonne = personne;
  }
}

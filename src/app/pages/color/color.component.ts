import { Component, DoCheck, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit, OnDestroy, DoCheck {
  @Input() defaultColor = 'lightblue';
  color = this.defaultColor;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (mesParams) => this.color = mesParams.couleur
    );
    this.activatedRoute.queryParams.subscribe(
      (qp) => console.log(qp)
    )
  }
  ngOnDestroy() {
    console.log('destroy');
  }
  changeColor(newColor) {
    this.color = newColor;
  }
  goToCv() {
    this.router.navigate(['cv']);
  }
}

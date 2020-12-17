import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css'],
})
export class TestObservableComponent implements OnInit {
  observable: Observable<number>;
  imageObservable: Observable<string>;
  paths = [
    '404.png',
    'cv.png',
    'as.jpg',
    'rotating_card_profile.png',
    'rotating_card_profile2.png',
    'rotating_card_profile3.png',
  ];
  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {
    this.observable = new Observable<number>((observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.complete();
        }
        observer.next(i--);
      }, 1000);
    });
    this.imageObservable = new Observable<string>((observer) => {
      let i = 0;
      setInterval(() => {
        if (i === this.paths.length) {
          i = 0;
        }
        observer.next(this.paths[i++]);
      }, 1000);
    });
    this.observable.subscribe((val) => {
      console.log(val);
    });
    this.observable
      .pipe(
        map((x) => x * 3),// 15 12 9 6 3
        filter((data) => data % 2 === 0) // 12 6
      )
      .subscribe(
        (data) => this.toastr.success('' + data),
        (erreur) => this.toastr.error('Pbm avec l observable'),
        () => this.toastr.info('complete')
      );
  }
}

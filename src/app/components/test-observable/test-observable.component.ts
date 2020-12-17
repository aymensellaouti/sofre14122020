import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css'],
})
export class TestObservableComponent implements OnInit {
  observable: Observable<number>;
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
    this.observable.subscribe((val) => {
      console.log(val);
    });
    this.observable.subscribe(
      (data) => this.toastr.success('' + data),
      (erreur) => this.toastr.error('Pbm avec l observable'),
      () => this.toastr.info('complete')
    );
  }
}

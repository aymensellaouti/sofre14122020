import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'euroDollar'
})
export class EuroDollarPipe implements PipeTransform {

  // 0 euro => dollar /0.83
  // else dollar => euro * 0.83
  transform(amount: number, ...converionType: number[]): number {
    if (!converionType[0]) {
      return amount / 0.83;
    }
    return amount * 0.83;
  }

}

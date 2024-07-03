import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addFive'
})
export class AddFivePipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    return value + 5;
  }

}

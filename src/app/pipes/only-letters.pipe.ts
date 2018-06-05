import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onlyLetters'
})
export class OnlyLettersPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
      return value;
   }
   return value.replace(/[^a-zA-Z0-9]/g, '');
  }

}

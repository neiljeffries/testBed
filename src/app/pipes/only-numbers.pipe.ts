import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onlyNumbers'
})
export class OnlyNumbersPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
       return value;
    }
    return value.replace(/[^0-9.]/g, '');
  }

}

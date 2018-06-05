import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'acType'
})
export class AcTypePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
      return value;
   }

    let text = '';
    if (value === 'A30') {
      text = 'A300-600';
    }
    if (value === '74Y') {
      text = '747-8';
    }
    if (value === '74P') {
      text = '747-400';
    }
    if (value === '75P') {
      text = '757-200';
    }
    if (value === '76P') {
      text = 'B767-300';
    }
    if (value === 'M1F') {
      text = 'MD-11';
    }
return text;
  }

}

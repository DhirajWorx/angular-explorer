import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'simpleFilter',
  pure: false
})
export class SimpleFilterPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    const temp = [];
    for (const item of value) {
      if (item.indexOf('Panchal') !== -1) {
        temp.push(item);
      }
    }
    console.log(temp.length);
    return temp;
  }
}

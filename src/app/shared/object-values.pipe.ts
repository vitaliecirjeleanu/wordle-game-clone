import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectValues'
})
export class ObjectValuesPipe implements PipeTransform {

  transform(value: object): any[] {
    return Object.keys(value).map((key: string) => value[key as keyof typeof value]);
  }
}

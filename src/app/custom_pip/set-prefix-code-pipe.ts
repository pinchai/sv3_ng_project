import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'setPrefixCode'
})
export class SetPrefixCodePipe implements PipeTransform {

  transform(value: string,): unknown {
    return `SETEC-${value.toUpperCase()}`;
  }

}

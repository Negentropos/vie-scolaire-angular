import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluralize',
  standalone: true,
})
export class PluralizePipe implements PipeTransform {
    transform(value: string, listLength = 1): string {
        if (listLength > 1) {
            return `${value}s`;
        } else {
            return value;
        }
    }
}
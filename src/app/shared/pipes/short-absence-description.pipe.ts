import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortAbsenceDescription',
  standalone: true,
})
export class ShortAbsenceDescriptionPipe implements PipeTransform {
    transform(value: string, length = 1): string {
        if (value.length < length) {
            return value;
        } else {
            return value.substring(0,length) + '...';
        }
    }
}
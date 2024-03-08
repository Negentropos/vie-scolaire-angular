import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'absenceTime',
  standalone: true,
})
export class AbsenceTimePipe implements PipeTransform {
    transform(value: string): string {
    return value.substring(0,5);

    }
}
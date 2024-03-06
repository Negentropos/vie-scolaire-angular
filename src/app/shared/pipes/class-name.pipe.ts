import { Pipe, PipeTransform } from '@angular/core';
import { ClassSchool } from '../../models/class-school';

@Pipe({
  name: 'className',
  standalone: true,
})
export class ClassNamePipe implements PipeTransform {
    transform(value: ClassSchool): string {
        if (value.cycle.code != 'JE') {
            return `${value.name} classe`;
        } else {
            return value.name;
        }
    }
}
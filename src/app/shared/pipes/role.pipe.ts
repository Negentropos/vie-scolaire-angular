import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'role',
  standalone: true,
})
export class RolePipe implements PipeTransform {
    transform(value: string): string {
        let message: string = '';
        switch (value) {
            case "admin" :
                message = "Administrateur";
            break;
            case "prof" :
                message = "Professeur";
            break;
            case "jardi" :
                message = "Jardinier(e) d'enfants";
            break;
            case "gest" :
                message = "Gestionnaire";
            break;
            case "peri" :
                message = "Équipe périscolaire";
            break;
            case "cant" :
                message = "Équipe cantine";
            break;
            case "gard" :
                message = "Équipe garderie";
            break;
            case "parent" :
                message = "Parent d'élève";
            break;
            default : message = "Role non assigné";

        }
        return message;

    }
}
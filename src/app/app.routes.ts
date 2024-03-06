import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'childs', pathMatch: 'full' },
    { path: 'childs',
    loadChildren: () => import("./childs/childs.routes").then(module => module.childsRoutes),
    canActivate: [AuthGuard]},
    { path: 'absences',
    loadChildren: () => import("./absences/absences.routes").then(module => module.absencesRoutes),
    canActivate: [AuthGuard] },
    { path : 'login', loadComponent: () => import('./auth/login/login.component').then(module => module.LoginComponent) },
    { path : 'profil', loadComponent: ()=> import('./auth/my-profil/my-profil.component').then(module=>module.MyProfilComponent),
    canActivate : [AuthGuard]
    }

];

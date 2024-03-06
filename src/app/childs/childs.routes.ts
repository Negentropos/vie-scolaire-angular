import { Routes } from '@angular/router';

export const childsRoutes: Routes = [
    {path:'',
    loadComponent:() => import('./childs-list/childs-list.component')
    .then(module => module.ChildsListComponent)},
    {path:':id',
    loadComponent:() => import('./child-detail/child-detail.component')
    .then(module => module.ChildDetailComponent)},
  ];
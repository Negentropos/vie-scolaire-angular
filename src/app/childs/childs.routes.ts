import { Routes } from '@angular/router';

export const childsRoutes: Routes = [
    {path:'myChilds',
    loadComponent:()=> import('./my-childs-list/my-childs-list.component')
    .then(module => module.MyChildsListComponent)
    },
    {path:'',
    loadComponent:() => import('./childs-list/childs-list.component')
    .then(module => module.ChildsListComponent)},
    {path:':id',
    loadComponent:() => import('./child-detail/child-detail.component')
    .then(module => module.ChildDetailComponent)},

  ];
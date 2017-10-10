import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './modules/core/page-not-found/page-not-found.component';

export const appRoutes: Routes = [
  {
    path: 'search',
    loadChildren: 'app/modules/github/github.module#GitHubModule'
  },
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

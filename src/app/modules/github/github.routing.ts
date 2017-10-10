import { Routes } from '@angular/router';

import { GithubSearchDetailComponent } from './github-search-detail/github-search-detail.component';
import { GithubSearchComponent } from './github-search/github-search.component';

export const githubRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: GithubSearchComponent
      },
      {
        path: ':id',
        component: GithubSearchDetailComponent
      }
    ]
  }
];

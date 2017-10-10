import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from './../shared/shared.module';
import { GithubSearchDetailComponent } from './github-search-detail/github-search-detail.component';
import { GithubSearchComponent } from './github-search/github-search.component';
import { githubRoutes } from './github.routing';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(githubRoutes)],
  declarations: [GithubSearchComponent, GithubSearchDetailComponent],
  exports: [GithubSearchComponent, GithubSearchDetailComponent]
})
export class GitHubModule {}

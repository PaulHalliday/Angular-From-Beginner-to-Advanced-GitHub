import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { GitHubService } from './../../core/services/github.service';
import { User } from './../../shared/models/user.model';

@Component({
  selector: 'app-github-search-detail',
  templateUrl: './github-search-detail.component.html',
  styleUrls: ['./github-search-detail.component.css']
})
export class GithubSearchDetailComponent implements OnInit {
  userInformation$: Observable<User>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private gitHubService: GitHubService
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    // Get user information for the Id
    this.userInformation$ = this.gitHubService.getUserInformation(id);
  }
}

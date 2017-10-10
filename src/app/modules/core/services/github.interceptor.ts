import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MdSnackBar } from '@angular/material';

import { User } from './../../shared/models/user.model';

@Injectable()
export class GitHubHttpInterceptor implements HttpInterceptor {
  constructor(private snackBar: MdSnackBar) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log(req);

    const newRequest = req.clone({
      headers: req.headers.set(
        'Authorization',
        'token YOUR-TOKEN-HERE'
      )
    });

    /**
     * success =>
     * error =>
     * () =>
     */

    return next.handle(newRequest).do(
      (event: HttpEvent<User>) => {
        if (event instanceof HttpResponse) {
          console.log('OK');
          console.log(event);
          console.log(event.body.name);
        }
      },
      (error: HttpErrorResponse) => {
        if (error instanceof HttpErrorResponse) {
          const snackBarRef = this.snackBar.open(error.message);
        }
      }
    );
  }
}

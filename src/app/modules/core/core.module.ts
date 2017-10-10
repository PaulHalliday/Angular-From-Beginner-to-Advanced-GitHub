import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GitHubHttpInterceptor } from './services/github.interceptor';
import { GitHubService } from './services/github.service';

@NgModule({
  imports: [HttpClientModule],
  declarations: [PageNotFoundComponent],
  exports: [PageNotFoundComponent]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        GitHubService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: GitHubHttpInterceptor,
          multi: true
        }
      ]
    };
  }

  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. It can only be imported in the AppModule.'
      );
    }
  }
}

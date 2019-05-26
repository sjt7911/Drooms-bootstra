import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// Loader | Spinner
import { NgxUiLoaderModule, NgxUiLoaderRouterModule } from 'ngx-ui-loader';
// Bootstrap
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    // Bootstrap
    NgbModule,
    NgbPaginationModule,
    // Loader - spinner
    NgxUiLoaderModule,
    NgxUiLoaderRouterModule.forRoot({ showForeground: true }),
  ],
  exports: [
    CommonModule,
    TranslateModule,
    // Bootstrap
    NgbModule,
    NgbPaginationModule,
    // Loader - spinner
    NgxUiLoaderModule,
    NgxUiLoaderRouterModule
  ]
})

export class SharedModule {}

// Required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

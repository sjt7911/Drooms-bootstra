import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxUiLoaderModule, NgxUiLoaderRouterModule } from 'ngx-ui-loader';

@NgModule({
  imports: [
    CommonModule,
    // Loader - spinner
    NgxUiLoaderModule,
    NgxUiLoaderRouterModule.forRoot({ showForeground: true }),
  ],
  exports: [
    CommonModule,
    // Loader - spinner
    NgxUiLoaderModule,
    NgxUiLoaderRouterModule
  ]
})

export class SharedModule {}

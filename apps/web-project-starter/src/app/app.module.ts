import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UiModule } from '@web-project-starter/ui';
import { ApiCodegenModule } from '@web-project-starter/api-codegen';

@NgModule({
  declarations: [AppComponent],
  // TODO: Add api url to env
  imports: [BrowserModule, UiModule, ApiCodegenModule.forRoot({ rootUrl: 'http://localhost:3333' })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

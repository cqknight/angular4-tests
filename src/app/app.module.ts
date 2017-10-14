import { PageNotFoundComponent } from './not-found.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingModule } from './app.routing.module';
import { TwainModule } from './twain/twain.module';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    RoutingModule,
    TwainModule
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: []
})
export class AppModule { }

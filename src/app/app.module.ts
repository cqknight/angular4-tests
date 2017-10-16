import { FormsModule } from '@angular/forms';
import { ComposeMessageComponent } from './compose-message.component';
import { CrisisCenterModule } from './crisis-center/crisis-center.module';
import { HeroesModule } from './heroes/heroes.module';
import { PageNotFoundComponent } from './not-found.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingModule } from './app.routing.module';
import { TwainModule } from './twain/twain.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ComposeMessageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TwainModule,
    DashboardModule,
    HeroesModule,
    CrisisCenterModule,
    RoutingModule,
    FormsModule,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: []
})
export class AppModule { }

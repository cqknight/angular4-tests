import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TwainComponent } from './twain/twain.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardHeroComponent } from './dashboard/dashboard-hero/dashboard-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    TwainComponent,
    DashboardComponent,
    DashboardHeroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

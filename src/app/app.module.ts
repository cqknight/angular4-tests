import { SelectivePreloadingStrategy } from './selective-preloading-strategy';
import { DialogService } from './dialog.service';
import { CanDeactivateGuard } from './can-deactivate-guard.serivce';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule } from '@angular/forms';
import { ComposeMessageComponent } from './compose-message.component';
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
    LoginComponent,
    PageNotFoundComponent,
    ComposeMessageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TwainModule,
    DashboardModule,
    HeroesModule,
    LoginRoutingModule,
    RoutingModule,
    FormsModule,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [DialogService, CanDeactivateGuard, SelectivePreloadingStrategy]
})
export class AppModule { }

import { DialogService } from './dialog.service';
import { CanDeactivateGuard } from './can-deactivate-guard.serivce';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { AdminModule } from './admin/admin.module';
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
    CrisisCenterModule,
    RoutingModule,
    FormsModule,
    AdminModule,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [DialogService, CanDeactivateGuard]
})
export class AppModule { }

import { HeroService } from './../model/hero.service';
import { DashboardHeroComponent } from './dashboard-hero/dashboard-hero.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DashboardComponent, DashboardHeroComponent],
  exports: [DashboardComponent, DashboardHeroComponent],
  providers: [HeroService]
})
export class DashboardModule { }

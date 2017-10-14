import { HeroService } from './../model/hero.service';
import { DashboardHeroComponent } from './dashboard-hero/dashboard-hero.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroDetailsComponent } from './hero-details/hero-details.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DashboardComponent }])
  ],
  declarations: [DashboardComponent, DashboardHeroComponent, HeroDetailsComponent],
  providers: [HeroService]
})
export class DashboardModule { }

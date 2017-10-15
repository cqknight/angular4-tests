import { HeroService } from './../model/hero.service';
import { DashboardHeroComponent } from './dashboard-hero/dashboard-hero.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: 'dashboard', component: DashboardComponent }])
  ],
  declarations: [DashboardComponent, DashboardHeroComponent],
  providers: [HeroService]
})
export class DashboardModule { }

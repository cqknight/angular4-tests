import { DashboardHeroComponent } from './dashboard-hero/dashboard-hero.component';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero';
import { Router } from '@angular/router';
import { HeroService } from '../model/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];
  constructor(
    private router: Router,
    private heroService: HeroService) {
  }

  ngOnInit() {
    console.log('Dashboard init.');
  }

  gotoDetail(hero: Hero) {
    const url = `/heroes/${hero.id}`;
    this.router.navigateByUrl(url);
  }
}

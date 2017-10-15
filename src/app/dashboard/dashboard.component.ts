import { DashboardHeroComponent } from './dashboard-hero/dashboard-hero.component';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero';
import { Router } from '@angular/router';
import { HeroService } from '../model/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];
  constructor(
    private router: Router,
    private heroService: HeroService) {
  }

  ngOnInit() {
    this.heroService.getHeroes().subscribe(
      (results) => { this.heroes = results; }
    );
  }

  gotoDetail(hero: Hero) {
    const url = `/hero-details/${hero.id}`;
    this.router.navigateByUrl(url);
  }
}

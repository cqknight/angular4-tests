import { slideInDownAnimation } from './../animations';
import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { HeroService } from '../model/hero.service';

import 'rxjs/add/operator/switchMap';
import { Hero } from '../model/hero';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.scss'],
    animations: [slideInDownAnimation]
})
export class HeroDetailComponent implements OnInit {
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display') display = 'block';
    @HostBinding('style.position') position = 'absolute';
    hero$: Observable<Hero>;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: HeroService
    ) { }

    ngOnInit(): void {
        this.hero$ =
            this.route.paramMap.switchMap(
                (params: ParamMap) =>
                    this.service.getHero(+params.get('id')));
    }

    gotoHeroes(hero: Hero) {
        const heroId = hero ? hero.id : null;
        this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
    }
}

import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { HeroService } from '../model/hero.service';
import { Hero } from '../model/hero';

@Component({
    selector: 'app-hero-list',
    templateUrl: './hero-list.component.html',
    styleUrls: ['./hero-list.component.scss'],
})
export class HeroListComponent implements OnInit {
    heroes$: Observable<Hero[]>;

    private selectedId: number;

    constructor(
        private service: HeroService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.heroes$ = this.route.paramMap
            .switchMap((params: ParamMap) => {
                // (+) before `params.get()` turns the string into a number
                this.selectedId = +params.get('id');
                return this.service.getHeroes();
            });
    }
}

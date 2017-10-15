import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    return Observable.of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    return this.getHeroes().map(heroes => heroes.find(h => h.id === id));
  }
}

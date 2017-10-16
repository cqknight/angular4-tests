import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class Crisis {
  constructor(public id: number, public name: string) { }
}

const CRISES = [
  new Crisis(1, 'Dragon Burning Cities'),
  new Crisis(2, 'Sky Rains Great White Sharks'),
  new Crisis(3, 'Giant Asteroid Heading For Earth'),
  new Crisis(4, 'Procrastinators Meeting Delayed Again'),
];

@Injectable()
export class CrisisService {
  getCrises(): Observable<Crisis[]> {
    return Observable.of(CRISES);
  }

  getCrisis(id: number): Observable<Crisis> {
    return this.getCrises().map(Crisises => Crisises.find(h => h.id === id));
  }
}

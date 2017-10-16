import { slideInDownAnimation } from './../animations';
import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { CrisisService, Crisis } from '../model/crisis.service';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-crisis-detail',
    templateUrl: './crisis-detail.component.html',
    styleUrls: ['./crisis-detail.component.scss'],
    animations: [slideInDownAnimation]
})
export class CrisisDetailComponent implements OnInit {
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display') display = 'block';
    @HostBinding('style.position') position = 'absolute';
    crisis$: Observable<Crisis>;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: CrisisService
    ) { }

    ngOnInit(): void {
        this.crisis$ =
            this.route.paramMap.switchMap(
                (params: ParamMap) =>
                    this.service.getCrisis(+params.get('id')));
    }

    gotoCrises(crisis: Crisis) {
        const crisisId = crisis ? crisis.id : null;
        // use relative URL
        this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
    }
}

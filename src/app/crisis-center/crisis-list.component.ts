import { CrisisService, Crisis } from './../model/crisis.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
    selector: 'app-crisis-list',
    templateUrl: './crisis-list.component.html',
    styleUrls: ['./crisis-list.component.scss'],
})
export class CrisisListComponent implements OnInit {
    crises$: Observable<Crisis[]>;

    private selectedId: number;

    constructor(
        private service: CrisisService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.crises$ = this.route.paramMap
            .switchMap((params: ParamMap) => {
                // (+) before `params.get()` turns the string into a number
                this.selectedId = +params.get('id');
                return this.service.getCrises();
            });
    }
}

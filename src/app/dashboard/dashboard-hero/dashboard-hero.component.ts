import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../../model/hero';

@Component({
  // tslint:disable-next-line:component-selector
  selector:    'dashboard-hero',
  templateUrl: './dashboard-hero.component.html',
  styleUrls: [ './dashboard-hero.component.scss' ]
})
export class DashboardHeroComponent {
  @Input() hero: Hero;
  @Output() selected = new EventEmitter<Hero>();

  click() { this.selected.emit(this.hero); }
}

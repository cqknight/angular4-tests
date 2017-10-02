import { Router } from '@angular/router';
import { HeroService } from '../model/hero.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { inject } from '@angular/core/testing';

class RouterStub {
  navigateByUrl(url: string) { return url; }
}

class FakeHeroService {

}

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: HeroService, useClass: FakeHeroService },
        { provide: Router, useClass: RouterStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  xit('should tell ROUTER to navigate when hero clicked', inject([Router], (router: Router) => {
    const spy = spyOn(router, 'navigateByUrl');

    // heroClick(); // trigger click on first inner <div class="hero">

    // args passed to router.navigateByUrl()
    const navArgs = spy.calls.first().args[0];

    // expecting to navigate to id of the component's first hero
    const id = component.heroes[0].id;
    expect(navArgs).toBe('/heroes/' + id, 'should nav to HeroDetail for first hero $id');
  }));
});

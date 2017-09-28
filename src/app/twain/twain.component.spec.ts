import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwainComponent } from './twain.component';
import { TwainService } from './twain.service';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { tick } from '@angular/core/testing';

describe('TwainComponent', () => {
  const testQuote = 'fake quote for testing';
  let component: TwainComponent;
  let fixture: ComponentFixture<TwainComponent>;
  let twainService: TwainService;
  let spy: jasmine.Spy;
  let de: DebugElement;
  let el: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TwainComponent],
      providers: [TwainService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwainComponent);
    component = fixture.componentInstance;
    twainService = fixture.debugElement.injector.get(TwainService);
    spy = spyOn(twainService, 'getQuote').and.returnValue(Promise.resolve(testQuote));

    de = fixture.debugElement.query(By.css('.twain'));
    el = de.nativeElement;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should not show quote before OnInit', () => {
    expect(el.textContent).toBe('', 'nothing displayed');
    expect(spy.calls.any()).toBe(false, 'getQuote not yet called');
  });

  it('should still not show quote after component initialized', () => {
    fixture.detectChanges();
    // getQuote service is async => still has not returned with quote
    expect(el.textContent).toBe('...', 'no quote yet');
    expect(spy.calls.any()).toBe(true, 'getQuote called');
  });

  it('should show quote after getQuote promise (async)', async(() => {
    fixture.detectChanges();

    fixture.whenStable().then(() => { // wait for async getQuote
      fixture.detectChanges();        // update view with quote
      expect(el.textContent).toBe(testQuote);
    });
  }));

  it('should show quote after getQuote promise (fakeAsync)', fakeAsync(() => {
    fixture.detectChanges();
    tick();                  // wait for async getQuote
    fixture.detectChanges(); // update view with quote
    expect(el.textContent).toBe(testQuote);
  }));

  it('should show quote after getQuote promise (done)', (done: any) => {
    fixture.detectChanges();

    // get the spy promise and wait for it to resolve
    spy.calls.mostRecent().returnValue.then(() => {
      fixture.detectChanges(); // update view with quote
      expect(el.textContent).toBe(testQuote);
      done();
    });
  });
});

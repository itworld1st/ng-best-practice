import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor(private router: Router) { }

  ngOnInit() {
    this.subscription = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(() => window.scrollTo(0, 0));

    // if using Angular Material sidenav components, implement as follow

    // this.subscription = this.router.events
    //   .pipe(
    //     filter(event => event instanceof NavigationEnd)
    //   )
    //   .subscribe(() => {
    //     const element = document.querySelector('mat-sidenav-content') || window;
    //     element.scrollTo(0, 0);
    //   });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

import {Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {GetCurrentUser, AUTH_STATE_TOKEN, AuthStateEngine} from './store-xs/auth.state';
import {Observable} from 'rxjs';
import {AuthState} from './store/connectication-store.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private store: Store
  ) {
    // this.isLoggedIn$ = this.store.select(AUTH_STATE_TOKEN)
  }


  // Uses the pandas memoized selector to only return pandas
  @Select(AUTH_STATE_TOKEN) isLoggedIn$!: Observable<string>;

  ngOnInit(): void {
    this.store.dispatch(new GetCurrentUser());
    this.store.select(AUTH_STATE_TOKEN).subscribe(x => console.log(x));
    this.isLoggedIn$.subscribe(x => console.log(x))
  }
}

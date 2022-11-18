import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ConnecticationStore} from '../store/connectication-store.interface';
import {currentUserGet} from '../store/auth.actions';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isUserLoaded$: Observable<boolean> | null = null;
  constructor(
    private store: Store<ConnecticationStore>){}

  ngOnInit(): void {
    this.store.dispatch(currentUserGet());
    this.isUserLoaded$ = this.store.select('auth')
      .pipe(map(x => x.isInitialCheckDone));
  }
}

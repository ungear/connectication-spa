import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {ConnecticationStore} from '../../store/connectication-store.interface';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-actions-menu',
  templateUrl: './actions-menu.component.html',
  styleUrls: ['./actions-menu.component.scss']
})
export class ActionsMenuComponent implements OnInit {
  isLogged$: Observable<boolean> | null = null;
  isReady$: Observable<boolean> | null = null;
  userId$: Observable<number | null> | null = null;
  constructor(
    private store: Store<ConnecticationStore>
  ) { }

  ngOnInit(): void {
    this.isLogged$ = this.store.select('auth')
      .pipe(map(x => x.isLogged));

    this.isReady$ = this.store.select('auth')
      .pipe(map(x => x.isInitialCheckDone));

    this.userId$ = this.store.select('auth')
      .pipe(map(x => x.userId));
  }
}

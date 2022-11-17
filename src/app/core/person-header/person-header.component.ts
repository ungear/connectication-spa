import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {ConnecticationStore} from '../../store/connectication-store.interface';
import {map} from 'rxjs/operators';
import {signOut} from '../../store/auth.actions';
import {Router} from '@angular/router';

@Component({
  selector: 'app-person-header',
  templateUrl: './person-header.component.html',
  styleUrls: ['./person-header.component.scss']
})
export class PersonHeaderComponent implements OnInit {
  isLogged$: Observable<boolean> | null = null;
  constructor(
    private store: Store<ConnecticationStore>,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.isLogged$ = this.store.select('auth')
      .pipe(map(x => x.isLogged));
  }

  onSignOutClick(): void {
    this.store.dispatch(signOut());
    this.router.navigateByUrl('/login');
  }

}

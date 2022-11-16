import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ConnecticationStore} from './store/connectication-store.interface';
import {UserService} from './shared/user.service';
import {currentUserGet} from './store/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private store: Store<ConnecticationStore>){}

  ngOnInit(): void {
    this.store.dispatch(currentUserGet());
    this.store.select('auth').subscribe(x => {
      console.log(x);
    });
  }
}

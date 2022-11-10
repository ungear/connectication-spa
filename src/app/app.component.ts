import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ConnecticationStore} from './store/connectication-store.interface';
import {UserService} from './shared/user.service';
import {logIn} from './store/store.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'connectication-spa';
  constructor(
    private store: Store<ConnecticationStore>,
    private userService: UserService){}

  ngOnInit(): void {
    this.userService.getCurrentUserProfile().subscribe(x => {
      this.store.dispatch(logIn({userId: x.id}));
    });
    this.store.select('auth').subscribe(x => {
      console.log(x);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/user.service';
import {UserProfile} from '../../shared/types/userProfile.interface';
import {tap, map, filter} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Store} from '@ngrx/store';
import {ConnecticationStore} from '../../store/connectication-store.interface';
import {PostService} from '../post.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  isLoading = false;
  currentUserProfile: Observable<UserProfile | null> | null = null;
  constructor(
    private userService: UserService,
    private postService: PostService,
    private store: Store<ConnecticationStore>
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.currentUserProfile = this.store.select('auth').pipe(
      map(x => x.userProfile),
      filter(x => !!x),
      tap(() => this.isLoading = false),
    );

    this.postService.getUserPosts().subscribe(console.log);
  }

  onCurrentUserLoadingFail(err: any): Observable<null>{
    console.log('fail');
    return of(null);
  }

}

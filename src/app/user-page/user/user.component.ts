import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/user.service';
import {UserProfile} from '../../shared/types/userProfile.interface';
import {map, filter, take} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Store} from '@ngrx/store';
import {ConnecticationStore} from '../../store/connectication-store.interface';
import {PostService} from '../post.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userId: string | null = null;
  isOwner: boolean | null = null;
  userProfile$: Observable<UserProfile | null> | null = null;
  constructor(
    private userService: UserService,
    private postService: PostService,
    private store: Store<ConnecticationStore>,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const paramUserId = this.route.snapshot.params.userId;
    // TODO validate routing params; consider https://stackoverflow.com/questions/57005764/angular-routing-optional-parameter-validation
    if (!paramUserId) { return; }
    this.userId = paramUserId;
    this.userProfile$ = this.userService.getUserProfile(paramUserId);

    this.store.select('auth')
      .pipe(
        filter(x => x.isInitialCheckDone),
        map(x => x.userId),
        take(1),
      ).subscribe((currentUserId) => this.isOwner = !!currentUserId && currentUserId === parseInt(paramUserId, 10));
  }

  onCurrentUserLoadingFail(err: any): Observable<null>{
    console.log('fail');
    return of(null);
  }

}

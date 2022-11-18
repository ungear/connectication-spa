import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/user.service';
import {UserProfile} from '../../shared/types/userProfile.interface';
import {tap, map, filter} from 'rxjs/operators';
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
  isLoading = false;
  currentUserProfile: Observable<UserProfile | null> | null = null;
  constructor(
    private userService: UserService,
    private postService: PostService,
    private store: Store<ConnecticationStore>,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const userId = this.route.snapshot.params.userId;
    // TODO what if param contains letters or absents
    if (!userId) { return; }
    this.isLoading = true;
    this.currentUserProfile = this.userService.getUserProfile(userId).pipe(
      tap(() => this.isLoading = false),
    );

    // this.postService.getUserPosts().subscribe(console.log);
  }

  onCurrentUserLoadingFail(err: any): Observable<null>{
    console.log('fail');
    return of(null);
  }

}

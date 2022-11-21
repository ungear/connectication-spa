import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../types/post.interface';
import {merge, Observable, of} from 'rxjs';
import {PostService} from '../post.service';
import {UserPageService} from '../user-page.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  @Input() userId!: string;
  @Input() isOwner!: boolean;
  posts$: Observable<Post[]> | null = null;
  constructor(
    private postService: PostService,
    private userPageService: UserPageService,
  ) {}

  ngOnInit(): void {
    // fetch all posts right away AND when user creates a new post
    this.posts$ = merge(
      of(1),
      this.userPageService.postCreated$
    ).pipe(
      switchMap(() => this.postService.getUserPosts(this.userId))
    );
  }

  onDeleteClick(postId: number): void{
    this.postService.deletePost(postId).subscribe();
  }

}

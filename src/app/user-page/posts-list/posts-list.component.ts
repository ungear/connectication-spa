import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../types/post.interface';
import {Observable} from 'rxjs';
import {PostService} from '../post.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  @Input() userId!: string;
  posts$: Observable<Post[]> | null = null;
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.posts$ = this.postService.getUserPosts(this.userId);
  }

}

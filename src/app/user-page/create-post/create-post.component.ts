import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import {UserPageService} from '../user-page.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  postText: string | null = null;
  constructor(
    private postService: PostService,
    private userPageService: UserPageService,
  ) { }

  ngOnInit(): void {
  }

  onFormSubmit(): void{
    if (!this.postText) {return; }
    this.postService.createPost(this.postText).subscribe(
      () => this.onPostCreatedSuccessfully(),
    );
  }

  onPostCreatedSuccessfully(): void{
    this.postText = null;
    this.userPageService.notifyOnPostCreated();
  }

}

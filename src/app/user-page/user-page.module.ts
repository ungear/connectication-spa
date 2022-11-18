import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import {UserPageRoutingModule} from './user-page-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { CreatePostComponent } from './create-post/create-post.component';

@NgModule({
  declarations: [
    UserComponent,
    UserProfileComponent,
    PostsListComponent,
    CreatePostComponent
  ],
  imports: [
    CommonModule,
    UserPageRoutingModule
  ]
})
export class UserPageModule { }

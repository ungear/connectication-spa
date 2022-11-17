import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import {HomeRoutingModule} from './home-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PostsListComponent } from './posts-list/posts-list.component';

@NgModule({
  declarations: [
    HomePageComponent,
    UserProfileComponent,
    PostsListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

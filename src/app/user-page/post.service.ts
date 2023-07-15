import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from './types/post.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getUserPosts(userId: number | string): Observable<Post[]>{
    return this.http.get<Post[]>(`${this.apiUrl}/post/all-posts/${userId}`);
  }

  createPost(text: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/post`, {text});
  }

  deletePost(postId: number | string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/post/${postId}`);
  }
}

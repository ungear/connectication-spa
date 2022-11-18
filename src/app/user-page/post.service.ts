import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from './types/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getUserPosts(): Observable<Post[]>{
    return this.http.get<Post[]>('http://localhost:3000/user/all-posts');
  }

  createPost(text: string): Observable<any> {
    return this.http.post<any>('http://localhost:3000/post', {text});
  }
}

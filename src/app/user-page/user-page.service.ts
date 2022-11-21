import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserPageService {
  private postCreatedSubject = new Subject();
  postCreated$ = this.postCreatedSubject.asObservable();

  notifyOnPostCreated(): void{
    this.postCreatedSubject.next();
  }
}

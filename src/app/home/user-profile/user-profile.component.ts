import {Component, Input, OnInit} from '@angular/core';
import {UserProfile} from '../../shared/types/userProfile.interface';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  @Input() userProfile!: UserProfile;
  constructor() { }

  ngOnInit(): void {
  }

}

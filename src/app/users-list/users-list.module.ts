import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import {UsersListRoutingModule} from './users-list-routing.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UsersListComponent,
    ToolbarComponent,
  ],
  imports: [
    CommonModule,
    UsersListRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UsersListModule { }

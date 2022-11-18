import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('../login/login.module').then(m => m.LoginModule)},
  { path: 'user', loadChildren: () => import('../user-page/user-page.module').then(m => m.UserPageModule)},
  { path: 'users', loadChildren: () => import('../users-list/users-list.module').then(m => m.UsersListModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

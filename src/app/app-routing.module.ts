import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './shared/components/error/error.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(mod => mod.AuthModule)
  },
  {
    path: ' ',
    loadChildren: () => import('./modules/users/users.module').then(mod => mod.UsersModule)
    // ,    canActivate: [ActivateLoginService]
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(mod => mod.AdminModule)
    // , canActivate: [ActivateLoginService]
  },
  {
    path: 'users',
    loadChildren: () => import('./modules/users/users.module').then(mod => mod.UsersModule)
  },
  {
    path: 'logout',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContainerComponent } from './components/container/container.component';
import { LoginComponent } from './components/login/login.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';

const routes: Routes = [
    {
        path: '',
        component: ContainerComponent,
        children: [
            {
                path: '',
                redirectTo: 'login'
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'change-password',
                component: ChangePasswordComponent
            },
            {
                path: 'logout',
                redirectTo: 'login'
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }

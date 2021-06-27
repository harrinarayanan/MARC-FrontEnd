import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CeuSlipsComponent } from './components/ceu-slips/ceu-slips.component';
import { ConnectionsComponent } from './components/connections/connections.component';
import { ContainerComponent } from './components/container/container.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { OneToOneSlipsComponent } from './components/one-to-one-slips/one-to-one-slips.component';
import { ReferalSlipComponent } from './components/referal-slip/referal-slip.component';
import { ThankyouSlipComponent } from './components/thankyou-slip/thankyou-slip.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'update-profile',
        component: UpdateProfileComponent
      },
      {
        path: 'thankyou-slip',
        component: ThankyouSlipComponent
      },
      {
        path: 'ceu-slip',
        component: CeuSlipsComponent
      },
      {
        path: 'one-to-one-slip',
        component: OneToOneSlipsComponent
      },
      {
        path: 'referal-slip',
        component: ReferalSlipComponent
      },
      {
        path: 'connections',
        component: ConnectionsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';


import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContainerComponent } from './components/container/container.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ThankyouSlipComponent } from './components/thankyou-slip/thankyou-slip.component';
import { ReferalSlipComponent } from './components/referal-slip/referal-slip.component';
import { OneToOneSlipsComponent } from './components/one-to-one-slips/one-to-one-slips.component';
import { CeuSlipsComponent } from './components/ceu-slips/ceu-slips.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    ContainerComponent,  
    DashboardComponent, UpdateProfileComponent, HomepageComponent, ThankyouSlipComponent, ReferalSlipComponent, OneToOneSlipsComponent, CeuSlipsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    
     FormsModule
  ]
})
export class UsersModule { }

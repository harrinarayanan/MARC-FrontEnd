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



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    ContainerComponent,  
    DashboardComponent, UpdateProfileComponent, HomepageComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    
     FormsModule
  ]
})
export class UsersModule { }

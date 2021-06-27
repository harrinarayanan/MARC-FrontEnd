import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  dashboard() {
    this.router.navigateByUrl('/users/dashboard');

  }
  updateProfile() {
    this.router.navigateByUrl('/users/update-profile');
  }
  thankYouProfile() {
    this.router.navigateByUrl('/users/thankyou-slip');
  }
  ceuSlip() {
    this.router.navigateByUrl('/users/ceu-slip');
  }
  oneToOne() {
    this.router.navigateByUrl('/users/one-to-one-slip');
  }
  referalSlip() {
    this.router.navigateByUrl('/users/referal-slip');
  } 
  connections() {
    this.router.navigateByUrl('/users/connections');
  }

}

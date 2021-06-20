import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.scroll();
    // this.mainContentScroll();
  }

  scroll() {
    $(window).scroll(function () {
      if ($(document).scrollTop() > 50) {
        $('.profile_section').addClass("fixed");
        $('.greetings').css("color", "red")
      } else {
        $('.profile_section').removeClass("fixed");
        $('.greetings').css("color", "#fff")
      }
    });
  }
  // mainContentScroll() {
  //   $(window).scroll(function () {
  //     if ($(document).scrollTop() > 50) {
  //       $('.nav_section').addClass("fixed-top");
  //     } else {
  //       $('.nav_section').removeClass("fixed-top");
  //     }
  //   });
  // }
}

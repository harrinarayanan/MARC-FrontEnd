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
  }

  scroll(){
    $(window).scroll(function () {
      if ($(document).scrollTop() > 50) {
        $('.profile_section').addClass("fixed");
        $('.greetings').css("color" , "red")
      } else {
        $('.profile_section').removeClass("fixed");
        $('.greetings').css("color" , "#fff")
      }
    });
  }
}

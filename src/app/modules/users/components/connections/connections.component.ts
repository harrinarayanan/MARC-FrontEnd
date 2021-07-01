import { Component, OnInit } from '@angular/core';
declare var $:any
@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.css']
})
export class ConnectionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.accordion-toggle').click(function(){
      $('.hiddenRow').show(100);
      
    });
  }

}

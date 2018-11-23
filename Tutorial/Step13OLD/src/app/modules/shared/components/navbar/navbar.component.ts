import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  items: any[];

  constructor() {
    this.initItems();
  }

  ngOnInit() { }

  initItems() {
    this.items = [
      {
        name: 'Home',
        id: 'home',
        class: '',
        url: '/home',
      },
      {
        name: 'Users',
        id: 'user',
        class: '',
        url: '/user',
      }
    ];
  }

}

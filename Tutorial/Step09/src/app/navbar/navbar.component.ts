import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  items: any[];

  constructor() { }

  ngOnInit() {
    this.initItems();
  }

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
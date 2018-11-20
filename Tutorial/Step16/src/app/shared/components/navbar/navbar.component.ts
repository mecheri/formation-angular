import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  items: any[];

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {
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

  logout() {
    this.authService.logout();
  }
}

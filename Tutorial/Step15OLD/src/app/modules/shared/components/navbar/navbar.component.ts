import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Constants } from '../../../core/services/constants.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  items: any[];

  constructor(
    private router: Router,
    private constants: Constants,
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
    localStorage.removeItem(this.constants.ACCESS_TOKEN);
    localStorage.removeItem(this.constants.APP_USER);
    this.router.navigate(["/login"]);
  }
}

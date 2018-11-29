import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../user';
import { UserService } from '../user.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user: User;

  bcItems = [
    { label: 'Home', routerLink: '/home', icon: 'pi pi-home' },
    { label: 'Users', routerLink: '/user' },
    { label: 'User Details' }
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private notifService: NotificationsService,
  ) {
    this.user = new User();
  }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
      .subscribe(
        user => this.user = user,
        error => this.notifService.error('Erreur', error)
      );
  }

  cancel() {
    this.router.navigate(['user']);
  }

  edit() {
    this.router.navigate(['user', 'edit', +this.route.snapshot.paramMap.get('id')]);
  }
}

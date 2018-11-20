import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from './../../models/user';
import { UserService } from './../../services/user.service';
import { ResourcesService } from '../../../../../core/services/resources.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  rsc: any;
  user: User;

  bcItems = [
    { label: 'Home', routerLink: '/home', icon: 'pi pi-home' },
    { label: 'Users', routerLink: '/user' },
    { label: 'User Details' }
  ];

  /**
   * Creates an instance of UserDetailComponent.
   * @param {Router} router
   * @param {ActivatedRoute} route
   * @param {UserService} userService
   * @param {ResourcesService} rscService
   * @param {NotificationsService} notifService
   * @memberof UserDetailComponent
   */
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private rscService: ResourcesService,
    private notifService: NotificationsService
  ) {
    this.user = new User();
  }

  ngOnInit() {
    this.loadResources();
    this.getUser();
  }

  loadResources() {
      this.rsc = this.rscService.rsc.pages.user;
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

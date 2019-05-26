import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
// User Model
import { UserModel as User } from '../shared/user.model';
// User service
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: 'user-list.component.html',
  styles: [`
    img {
      width: 50px;
      height: auto;
    }
  `]
})

export class UserListComponent implements OnInit, OnDestroy {
  users: Array<User> = new Array<User>();
  numberObsSubscriptions: Subscription = new Subscription();
  // Pagination
  page: number;
  pageSize: number;

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getUserList();

    this.pageSize = 10;
    this.page = 1;
  }

  /**
   * Get All Users
   */
  getUserList(): void {
    this.numberObsSubscriptions.add(
      this.userService.get()
        .subscribe(
        (response) => {
          this.users = Object.assign(this.users, response.body);
        },
        (error) => {
          console.log(error);
        },
        () => {}
      )
    );
  }

  /**
   * Edit User by Id
   * @param id
   */
  editUser(obj: any): void {
    this.userService.setSubject(obj.login);
    this.router.navigate([`/user/${obj.id}/edit`]);
  }

  ngOnDestroy(): void {
    this.numberObsSubscriptions.unsubscribe();
  }
}

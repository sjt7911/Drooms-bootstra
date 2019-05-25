import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
// User Model
import { UserModel as User } from '../shared/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: 'user-list.component.html'
})

export class UserListComponent implements OnInit {
  users: Array<User> = new Array<User>();

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList(): void {
    this.userService.get().subscribe(
        (response) => {
          this.users = Object.assign(this.users, response.body);
        },
        (error) => {
        },
        () => {
          console.log(this.users);
        }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
// User Model
import { UserModel as User } from '../shared/user.model';
import { Router } from '@angular/router';

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

export class UserListComponent implements OnInit {
  users: Array<User> = new Array<User>();

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getUserList();
  }

  /**
   * Get All Users
   */
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

  /**
   * Edit User by Id
   * @param id
   */
  editUser(id: number): void {
    this.router.navigate([`/user/${id}/edit`]);
  }
}

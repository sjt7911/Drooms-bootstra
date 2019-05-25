import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { UserService } from '../shared/user.service';
import { UserModel as User } from '../shared/user.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: 'user-edit.component.html'
})

export class UserEditComponent implements OnInit {
  userId: string;
  user: User = new User();

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private userService: UserService) {}

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');

    if (this.userId) {
      this.getUserById(this.userId);
    }
  }

  /**
   * Get Current User by Id
   * @param userId
   */
  getUserById(userId: string) {
    this.userService.getById(userId)
      .subscribe(
        (response) => {
          this.user = Object.assign(this.user, response);
        },
        (error) => {
        },
        () => {
        }
      );
  }

  /**
   * Redirect to Home Page
   */
  backToHome(): void {
    this.router.navigate(['/']);
  }
}

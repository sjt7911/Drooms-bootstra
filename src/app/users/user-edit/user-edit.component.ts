import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
// User Model
import { UserModel as User } from '../shared/user.model';
// User Service
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: 'user-edit.component.html'
})

export class UserEditComponent implements OnInit, OnDestroy {
  userId: string;
  user: User = new User();
  userRepos: Array<any> = new Array<any>();
  checkForRepo: boolean;
  numberObsSubscriptions: Subscription = new Subscription();

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private userService: UserService) {}

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.paramMap.get('id');

    if (this.userId) {
      this.getUserById(this.userId);
    }

    this.checkForRepo = false;
  }

  /**
   * Get Current User by Id
   * @param userId
   */
  getUserById(userId: string) {
    this.numberObsSubscriptions.add(
      this.userService.getById(userId)
        .subscribe(
          (response) => {
            this.user = Object.assign(this.user, response);
          },
          (error) => {
            console.log(error);
          },
          () => {
          }
        )
    );
  }

  /**
   * Get User repositories
   */
  getRepositories(): void {
    this.checkForRepo = true;

    this.numberObsSubscriptions.add(
      this.userService.getUserRepo(this.user.login)
        .subscribe(
          (response) => {
            this.userRepos = Object.assign(this.userRepos, response);
          },
          (error) => {
            console.log(error);
          },
          () => {
          }
        )
    );
  }

  /**
   * Redirect to Home Page
   */
  backToHome(): void {
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    this.numberObsSubscriptions.unsubscribe();
  }
}

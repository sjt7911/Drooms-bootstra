import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel as User } from './user.model';

@Injectable()

export class UserService {
  constructor(private http: HttpClient) {}

  baseUrl() {
    return 'https://api.github.com/users';
  }

  get() {
    return this.http.get<User>(this.baseUrl(), { observe: 'response' });
  }
}

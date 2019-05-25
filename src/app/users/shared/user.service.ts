import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel as User } from './user.model';
import { Subject } from 'rxjs';

@Injectable()

export class UserService {
  private subject: Subject<any> = new Subject();

  constructor(private http: HttpClient) {}

  baseUrl() {
    return 'https://api.github.com';
  }

  get() {
    return this.http.get<User>(this.baseUrl() + '/users', { observe: 'response' });
  }

  getById(id: string) {
    return this.http.get<User>(this.baseUrl() + '/user/' + id);
  }

  getUserRepo(name: string) {
    return this.http.get(this.baseUrl() + '/users/' + name + '/repos');
  }

  /**
   * In case want to share user data between components
   * @param user
   */
  setSubject(user: any) {
    this.subject = user;
  }

  /**
   * In case want to share user data between components
   */
  getSubject() {
    return this.subject;
  }
}

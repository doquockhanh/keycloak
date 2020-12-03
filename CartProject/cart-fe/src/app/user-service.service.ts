import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Message} from './message';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private API = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient) { }

  checkUser(user: User): Observable<Message>{
    return this.httpClient.post<Message>(this.API + 'login', user);
  }
}

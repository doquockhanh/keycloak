import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {User} from '../user';
import {UserServiceService} from '../user-service.service';
import {Message} from '../message';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  // @ts-ignore
  formLogin: FormGroup;
  // @ts-ignore
  user: User;
  // @ts-ignore
  message: Message;

  constructor(private formBuilder: FormBuilder,
              private userService: UserServiceService) {
  }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      userName: [],
      password: []
    });
  }

  login(): void {
    this.user = this.formLogin?.value;
    console.log(this.user);
    this.userService.checkUser(this.user).subscribe(
      mes => {
        this.message = mes;
        this.checkLogin(mes);
      }
    );
  }

  checkLogin(mess: Message): void {
    console.log('khanh');
    if (mess.note) {
      //  redirect
    } else {
      this.formLogin.reset();
    }
  }
}

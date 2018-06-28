import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  data= {
    email: '',
    pwd: ''
  }

  login(){
    console.log(this.data);
    this.userService.signupLogin('/user/login', this.data)
      .subscribe((res) => {
        if(res)
          console.log('login response: ', res);
          
      })
  }

  ngOnInit() {
  }

}

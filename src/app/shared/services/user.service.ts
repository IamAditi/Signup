import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(
    private commonService: CommonService,
    private http: HttpClient
  ) { }

  signUp(data){
    return this.http.post(this.commonService.baseUrl + '/userSignup', data);
  }
}

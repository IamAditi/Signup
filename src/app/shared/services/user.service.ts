import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Options } from 'selenium-webdriver/opera';

@Injectable()
export class UserService {

  constructor(
    private commonService: CommonService,
    private http: HttpClient
  ) { }

  signupLogin(url, data){
    return this.http.post(this.commonService.baseUrl + url, data);
  }

  uploadPic(url, data){
    return this.http.post(this.commonService.baseUrl + url, data, { 
      reportProgress: true,
      observe: 'events' 
    });
  }
}

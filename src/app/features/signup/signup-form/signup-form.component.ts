import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  counter = 0;
  selectedFile: File = null;
  data= {
    fname: '',
    lname: '',
    email: '',
    phone: '',
    address: '',
    pwd: ''
  };
  result = '';

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  signup(value){
    console.log(this.data);
    
    this.userService.signupLogin('/user/signup', this.data)
      .subscribe((res :any) => {
        if(res){
          console.log(res.result._id);
          
          this.onUpload(res.result._id);          
          this.result = res.message;
          this.router.navigate(['/profile'])
        }
        else{
          this.result = res.message;
        }
    })   
  }

  onUpload(userId){
    var dp = new FormData();
    dp.append('myFile',  this.selectedFile, this.selectedFile.name);
    console.log(dp);
    this.userService.uploadPic(`/userSignup/uploadDp/${userId}`, dp)
      .subscribe((response: any) => {
        console.log('file upload response', response);   
        if(response){
          this.result = response.message;
        }
    })
  }

  nextStep(value){
    this.counter = value
  }

  onFileChanged(event){
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile);
    
  }

  ngOnInit() {}


}

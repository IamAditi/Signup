import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  counter = 0;
  selectedFile: File = null;
  data: any;
  constructor(
    private userService: UserService
  ) { }

  signup(value){
    // const fd = new FormData();
    // fd.append('image', this.selectedFile, this.selectedFile.name);
    // console.log(fd);
    
    this.userService.signUp(value)
      .subscribe((res) => {
        console.log('Sign up server response: ', res);
      })
    console.log(value);
    console.log(this.selectedFile);
    
    
  }
  nextStep(value){
    this.counter = value
  }
  onFileSelected(event){
    this.selectedFile = <File>event.target.files[0];
  }

  ngOnInit() {
  }

}

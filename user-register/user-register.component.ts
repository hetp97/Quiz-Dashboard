import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import{AuthService} from '../auth.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent {
  SucessMessage='';
  Submitted=false;  

  onSubmit() { this.Submitted = true; }
  SignupForm= new FormGroup({
  Username: new FormControl('', Validators.minLength(4)),
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', Validators.minLength(6)),
  Cpassword: new FormControl('',Validators.required)
})


get Username()
{
  return this.SignupForm.get('Username')
}
get email()
{
  return this.SignupForm.get('email')
}
get password()
{
  return this.SignupForm.get('password')
}
get Cpassword()
{
  return this.SignupForm.get('Cpassword')
}
registerUserData={
  username:'',
  email:'',
  password:'',
  Cpassword:'',
  role:''
}
constructor(private _auth:AuthService){}

registerUser(){
//console.log(this.registerUserData);

this._auth.registerUser(this.registerUserData)
.subscribe(
  res =>{this.SucessMessage="Registration Sucessful"
  localStorage.setItem('token', res.token)
},
  err =>console.log(err)
)


}


  }




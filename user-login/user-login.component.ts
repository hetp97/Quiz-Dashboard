import { Component} from '@angular/core';

import {FormControl, FormGroup, Validators} from '@angular/forms'
import { AuthService } from '../auth.service';
import {Router} from '@angular/router'
import{HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent{
  ErrorMessage='';

LoginForm= new FormGroup({
  email: new FormControl('',[Validators.required, Validators.email]),
  password: new FormControl('',[Validators.minLength(6)])
});

constructor(
  private _auth:AuthService,
  private router:Router){

}

get email()
{
  return this.LoginForm.get('email')
}

get password()
{
  return this.LoginForm.get('password')
}

loginUserData={
  email:'',
  password:''
}

LoginUser(){
 console.log("Login user invoked from user login component");
 this._auth.LoginUser(this.loginUserData)
  .subscribe(
    user=>{
     console.log(user);
     //localStorage.setItem('token',user.token)
     let role= user['role'];
     console.log(role);
     if(role=='admin') {
       this.router.navigateByUrl('/admin-dashboard');
     } else if(role=='lead') {
       this.router.navigateByUrl('/lead-dashboard');
     } else if(role=='user'){
       this.router.navigateByUrl('/user-dashboard');
     }
   },

    err=>{
      this.ErrorMessage="Login Not Successful";
    }
 )
}
}
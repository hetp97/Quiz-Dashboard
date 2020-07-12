import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import{observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private RegisterUrl="http://localhost:5400/api/register-user";
  private LoginUrl="http://localhost:5400/api/login-user";
  private CreatequizUrl="http://localhost:5400/create-quiz";
  constructor(private http:HttpClient) { }
  registerUser(user) {
    return this.http.post<any>(this.RegisterUrl, user);
  }
  
  LoginUser(user){
    return this.http.post<any>(this.LoginUrl, user);
  }
  CreateQuiz(quiz){
    return this.http.post<any>(this.CreatequizUrl,quiz);
  }
}



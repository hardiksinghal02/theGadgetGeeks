import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})


export class AuthService{
  user = new BehaviorSubject(null);
  constructor(private http:HttpClient){}

  async signupUser(authData:{email:string, password:string, name: string}){
    return await this.http.post<User>('http://localhost:3000/api/auth/signup',authData).toPromise();
  }

  verifyEmail(params:{mode:string,apiKey:string,oobCode:string,lang:string}){
    return this.http.post<{verificationStatus:boolean}>('http://localhost:3000/api/auth/verifyemail',params);
  }

  sendVerificationEmail(){
    return this.http.post('http://localhost:3000/api/auth/sendemailverificationlink','Test').toPromise();
  }

  async loginUser(authData:{email: string, password: string}){

    return await this.http.post<User>('http://localhost:3000/api/auth/login',authData).toPromise()
  }

  async loginWithToken(token: string){
    return await this.http.post<User>('http://localhost:3000/api/auth/loginwithtoken',{token: token}).toPromise();
  }

  logout(){
    return this.http.get('http://localhost:3000/api/auth/logout');
  }

  async getUser(){
    return await this.http.get<User>('http://localhost:3000/api/auth/getuser').toPromise();
  }

}

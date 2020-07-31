import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  constructor(private authService:AuthService,private router: Router, private commonService:CommonService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.loading = true;
    const email = form.value.email;
    const password = form.value.password;

    this.authService.loginUser({email: email, password: password}).then((result) => {
      if(result){
        localStorage.setItem('token',result.token);
        if(result.emailVerified){
          this.authService.user.next(result);
          this.router.navigate(['/']);
        }else{
          this.router.navigate(['/emailverify']);
        }
        this.loading = false;
      }
    }).catch((errorMessage) => {
      this.commonService.openSnackBar(errorMessage.error);
    });

  }

}

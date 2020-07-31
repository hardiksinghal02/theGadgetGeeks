import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router, private commonService: CommonService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    const name = form.value.name;
    const email = form.value.email;
    const password = form.value.password;

    this.authService.signupUser({email: email, password: password, name:name}).then((user) => {
      localStorage.setItem('token',user.token);

      this.router.navigate(['/emailverify']);
    }).catch((error) => {
      this.commonService.openSnackBar(error.error)
    });
  }



}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-email-prompt',
  templateUrl: './verify-email-prompt.component.html',
  styleUrls: ['./verify-email-prompt.component.css']
})
export class VerifyEmailPromptComponent implements OnInit {

  counter = 60;
  buttonDisabled = true;
  constructor(private authService: AuthService, private router: Router) {
    this.timer();
  }

  ngOnInit(): void {
    this.authService.getUser().then(user => {
      if(!user)
        this.router.navigate(['/']);
      else{
        if(user.emailVerified){
          this.router.navigate(['/']);
        }else{
        this.authService.sendVerificationEmail().then().catch(error => {
          console.log(error);
        });
        }
      }
    })
  }

  sendEmailAgain(){
    this.authService.sendVerificationEmail().then().catch(error => {
      console.log(error);
    });
    this.timer();
  }

  timer(){
    this.counter = 60;
    this.buttonDisabled = true;
    let intervalId = setInterval(() => {
      this.counter = this.counter - 1;
      if(this.counter === 0) {clearInterval(intervalId); this.buttonDisabled = false;}
  }, 1000)
  }


}


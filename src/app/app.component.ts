import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'theGadgetGeeks';
  user = null;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(){
    this.user = this.authService.user.subscribe(user => {
      this.user = user;
    });

    let token = localStorage.getItem('token');
    if(!token){
      this.authService.user.next(null);
    }else{
      this.authService.loginWithToken(token).then(user => {
        console.log(user);
        if(!user){
          localStorage.removeItem('token');
          this.authService.user.next(null);
        } else{
          if(user.emailVerified){
            this.authService.user.next(user);
            this.user = user;
          }else{
            this.authService.user.next(null);
          }
        }
      }).catch(error => console.log(error)
      );
    }
    // if(!token){
    //   this.user = null;
    // }else{
    //   this.authService.loginWithToken(token).then((user) => {
    //     if(user.emailVerified)
    //       this.authService.user.next(user);
    //     else
    //       this.authService.user.next(null);
    //   }).catch(errorMessage => {
    //     // console.log(errorMessage.error);
    //     localStorage.removeItem('token');
    //     this.router.navigate(['/login']);
    //   });
    // }
        // this.authService.user.subscribe(user => {
        //   this.user = user;
        // });
        // console.log(!!this.user);

    // this.authService.getUser().then((user) => {
    //   console.log(user);
    //   if(user){
    //     console.log(user.emailVerified);

    //     if(user.emailVerified){
    //       this.authService.user.next(user)

    //     }
    //   }
    // });

  }

  onLogout(){
    this.authService.user.next(null);
    this.authService.logout().subscribe();
    localStorage.removeItem('token');
    this.user = null;
    this.router.navigate(['/login']);
  }
}

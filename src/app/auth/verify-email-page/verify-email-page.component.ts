import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-verify-email-page',
  templateUrl: './verify-email-page.component.html',
  styleUrls: ['./verify-email-page.component.css']
})
export class VerifyEmailPageComponent implements OnInit {

  status = null;
  constructor(private route:ActivatedRoute,private authService: AuthService) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.queryParams);
    const mode = this.route.snapshot.queryParams.mode;
    const apiKey = this.route.snapshot.queryParams.apiKey;
    const oobCode = this.route.snapshot.queryParams.oobCode;
    const lang = this.route.snapshot.queryParams.lang;
    this.authService.verifyEmail({mode: mode, apiKey: apiKey, oobCode: oobCode, lang: lang}).subscribe(result => {
      this.status = result.verificationStatus;
    });
  }

}

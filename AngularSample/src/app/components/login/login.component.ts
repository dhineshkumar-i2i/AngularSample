import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authenticate/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public mail: string = '';
  public pass: string = '';

  constructor(public router: Router, public authenticate: AuthenticateService) {}

  ngOnInit(): void {}

  public verifyCredentials(): void {
    this.authenticate.authenticate(this.mail, this.pass);
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../../services/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public mail: string = '';
  public pass: string = '';

  constructor(public authenticate: AuthenticateService) { }

  ngOnInit(): void {
  }

  /**
   * this method calls the authenticate service to validate the login details.
   */
  public verifyCredentials(): void {
    this.authenticate.authenticate(this.mail, this.pass);
  }
}

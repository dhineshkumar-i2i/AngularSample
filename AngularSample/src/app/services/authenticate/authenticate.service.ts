import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  public authenticated: boolean = false;
  constructor(public router: Router) { }

  public authenticate(mail: string, pass: string): void {
    if (mail == 'abcd' && pass == 'abcd') {
      this.authenticated = true;
      this.router.navigate(['to-do']);
    } else {
      alert("Wrong Credentials");
    }
  }
}

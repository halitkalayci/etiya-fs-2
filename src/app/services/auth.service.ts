import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private jwtHelper: JwtHelperService) {}

  isAuthenticated(): boolean {
    let token = localStorage.getItem('token');

    if (!token) return false;

    // jwt'nin geçerliliğini doğrula
    try {
      let isExpired = this.jwtHelper.isTokenExpired(token);
      if (isExpired) return false;
    } catch {
      return false;
    }
    return true;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  isAuthenticated(): boolean {
    let token = localStorage.getItem('token');

    if (!token) return false;

    return true;
  }
}

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  // return değeri ilgili route işlevinin gerçekleşip gerçekleşemeyeceğini belirler.
  const router = inject(Router);
  const authService = inject(AuthService);

  let isAuthenticated: boolean = authService.isAuthenticated();
  if (!isAuthenticated) {
    router.navigateByUrl('/');
    return false;
  }
  return true;
};
// angular < 16 => Guard Class
// angular > 16 => Fn

// role

// pipes => Built-in Pipes - Custom Pipes
// directives
// ngRx => Angular Redux => global state management
// backend development

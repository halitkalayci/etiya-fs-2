import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // return değeri ilgili route işlevinin gerçekleşip gerçekleşemeyeceğini belirler.
  const router = inject(Router);

  let isAuthenticated: boolean = true;
  if (!isAuthenticated) {
    router.navigateByUrl('/');
    return false;
  }
  return true;
};
// angular < 16 => Guard Class
// angular > 16 => Fn

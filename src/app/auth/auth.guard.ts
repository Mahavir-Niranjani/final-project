import { CanActivateFn, Router } from '@angular/router';
import { environment } from '../../environments/environment.development';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const loginKey = environment.loginKey;
  const router = inject(Router);
  if (localStorage.getItem(loginKey)) {
    return true;
  }
  router.navigateByUrl('/login', { replaceUrl: true });
  return false;
};

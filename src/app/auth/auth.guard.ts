import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  let authenticated = authService.isAuthenticated();

  if(authenticated) {
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
};

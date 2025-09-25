import {CanActivateFn, Router} from '@angular/router';
import {Auth} from '../services/auth';
import {inject} from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  //Injection des dependances necessaires pour l'authentification
  const authService=inject(Auth);
  const router = inject(Router);

  if(!authService.isAuthenticated()) return true;
  else{
    router.navigate(['/home']);
    return false;
  }
};

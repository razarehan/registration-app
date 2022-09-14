// import { Injectable } from '@angular/core';
// import {
//   ActivatedRouteSnapshot,
//   CanActivate,
//   Router,
//   RouterStateSnapshot
// } from '@angular/router';
// import { Observable } from 'rxjs';
// import { AuthGardService } from './auth-gard.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGardActivateService implements CanActivate {

//   constructor(private authGardService: AuthGardService,
//     private router: Router) { }

//   // canActivate(route: ActivatedRouteSnapshot,
//   //   state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
//   //   return this.authGardService.isAuthenticate().then(
//   //     (authenticated: boolean) => {
//   //       if(authenticated) {
//   //         return true;
//   //       }
//   //       else {
//   //         this.router.navigate(['login']);
//   //       }
//   //     }
//   //   );
//   // }
// }

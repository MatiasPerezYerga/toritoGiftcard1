import { Injectable } from '@angular/core';
/*import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';*/
import {  CanActivate,  Router } from '@angular/router';

import { Observable } from 'rxjs';

/*Ademas importamos el router y el operador map de la libreria rxjs*/
import { map } from 'rxjs/operators'; 


/* Importamos el AuthServices */

import { AuthService} from "./auth.service";


@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {
/*Inyectamos el servicio con el constructor*/
constructor(private authSvc: AuthService, private router: Router){


}

  canActivate():any {

    if(this.authSvc.loggedIn()){
      return true;
    }else{

    this.router.navigate(['/auth/login']);
    return false;
    }



    



/*    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;*/
   /* Domini devuelve el retorno del CanActice() mediante una pipe que mapea el usario y si no se encuentra usuario autorizando retorna falso la visibilidad.

   return this.AuthService.userData$.pipe(
      map( user =>{
      
      if(!user){
      

      //redirect LOGIN Page
      this.router.navigate([/'login']);
      return false;

      }
      return true;})

      }

      })
      )
*/
  }
  
}

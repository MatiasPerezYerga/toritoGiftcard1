import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//importa nuestras interfaces
import { UserI } from '../models/user';
import { JwtResponseI } from '../models/jwt-response';
//importamos un operador de la libreria RXJS
import { tap } from 'rxjs/operators';
import {Observable, BehaviorSubject} from 'rxjs';

//Importamos el router
import { Router } from '@angular/router';

@Injectable({  providedIn: 'root'})


export class AuthService {

//creamos 2 propiedades de nuestro server
  AUTH_SERVER: string = 'http://localhost:3000/api';
  authSubject = new BehaviorSubject(false);
  private token: any;

//En el constructor hay que inyectar el HTTP
  constructor(private httpClient: HttpClient, private router: Router) { 
    this.token='';
  }

//creamos los métodos

  register(user: UserI): Observable<JwtResponseI> {
    return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}/register`,
      user).pipe(tap(
        (res: JwtResponseI) => {
          if (res) {
            // guardar token
            this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
          }
        })
      );
  }

  login(user: UserI): Observable<JwtResponseI> {
    return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}/login`,
      user).pipe(tap(
        (res: JwtResponseI) => {
console.log(res);

          if (res) {
            // guardar token en el local STORAGE
            this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
            this.router.navigate(['/prueba']);
            console.log("Ha ingresado correctamente.");
            console.log(res.dataUser.accessToken, res.dataUser.expiresIn)


          }
        },
        (err)=> console.log("Como te atreves a ingresao algo incorrecto!")

        )
      );
  }

  logout(): void {
    this.token = '';
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");


  }

  private saveToken(token: string, expiresIn: string): void {
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("EXPIRES_IN", expiresIn);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }

 /* tambien podemos escribir en una sola linea*/

    loggedIn(): boolean{

    return !!localStorage.getItem('ACCESS_TOKEN');

    }

 /*!!localStorage.getItem('token');*/
}

import { getLocaleWeekEndRange } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Observable, Subject, tap, throwError } from 'rxjs';
import { AuthResponse } from '../models/AuthResponse';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api_key = "AIzaSyDN_G_Skp9mR9kfy3HR52BcWnKE5DrIDFQ"
  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient,
              private router: Router) { }

  signUp(email: string, password: string) {
    return this.http.post<AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + this.api_key,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }).pipe(
        tap(response => {
          this.handleAuthentication(response.email, response.localId, response.idToken, +response.expiresIn)
        })
        )
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
      this.api_key, {
        email: email,
      password: password,
      returnSecureToken: true
    }).pipe(
      tap(response => {
        this.handleAuthentication(response.email, response.localId, response.idToken, +response.expiresIn)
      })
      )
  }

  logout(){
    this.user.next(null);
   // localStorage.removeItem("user"); LOCALSTORAGEdaki (tarayıcıdan) user bilgisini siler.
    this.router.navigate(['/auth']);
  }

  autoLogin() {
    const user = JSON.parse(localStorage.getItem("user"));

    if(!user) {
      return;
    }

    const loadedUser = new User(
      user.email,
      user.id,
      user._token,
      new Date (user._tokenExpirationDate)
    );

    if(loadedUser.token) {
      this.user.next(loadedUser);
    }
  }
  
  handleAuthentication(email: string, userId: string, token:string, expiresIn:number){
    const expirationDate = new Date(new Date().getTime() + (expiresIn * 1000))
          const user = new User(
              email,
              userId,
              token,
              expirationDate
          );

          this.user.next(user);

          localStorage.setItem("user", JSON.stringify(user));

  }


  private handleError(response: HttpErrorResponse) {
    let message = "hata oluştu";
    
    if(!navigator.onLine){
      message= "internet bağlantınız yok."
      return throwError(message);
    }
        if (response.error.error) {
          switch (response.error.error.message) {
            case "EMAIL_EXISTS":
              message = "mail adresi kullanılmış";
              break;
    
            case "EMAIL_NOT_FOUND":
              message = "mail adresi bulunamadı";
              break;
            case "INVALID_PASSWORD":
              message = "hatalı parola";
              break;
          }
        }
        return throwError(message);
      }

}

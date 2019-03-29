import { Injectable } from '@angular/core';
import {AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { stringify } from '@angular/compiler/src/util';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth: AngularFireAuth) { 
    
  }
  login(email:string, password:string)
  {
    return new Promise((resolve, reject) =>{
this.afauth.auth.signInWithEmailAndPassword(email,password)
.then(userData => resolve(userData),Err => reject(Err))

    });
  }

  register(email:string, password:string)
  {
    return new Promise((resolve, reject) =>{
this.afauth.auth.createUserWithEmailAndPassword(email,password)
.then(userData => resolve(userData),Err => reject(Err))

    });
  }
  
  getauth(){
    return this.afauth.authState.pipe(map(
     auth => auth
    ));
  }
  logout(){
    this.afauth.auth.signOut();
  }
}

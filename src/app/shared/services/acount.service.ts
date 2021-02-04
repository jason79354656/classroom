import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { 
  AngularFirestore,
  AngularFirestoreDocument
 } from '@angular/fire/firestore';


/////import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/switchMap';
import { of } from 'rxjs';
import {Observable} from 'rxjs/Rx';
import { identifierName } from '@angular/compiler';
import * as firebase from 'firebase';
import 'firebase/auth';

import {User} from "./../../shared/models/user.model" 
import { RoleService } from './role.service';
import { OnlineOfflineService } from './online-offline.service';

@Injectable({
  providedIn: 'root'
})
export class AcountService {
  
  user: Observable<User>
  authState: any = null
  public userData: Observable<firebase.User>;
  
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private servicerole : RoleService,
    private servece_linea : OnlineOfflineService,
    
  ) {
    this.user = this.afAuth.authState.switchMap(user =>{
      if(user){
        console.log("entra a servicio de autentificacion")
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
      } else {
        return of(null);
      }
    });
    this.userData = afAuth.authState
    this.afAuth.authState.subscribe(data =>{
      this.authState = data
    })
    this.get_statusconexion()
  }


  public verificar(email:string , passwoed: string){
    if(this.servece_linea.isOnline){
      return this.emailSignUp(email,passwoed)
    }else{
      console.log('salver seguro')
    }
  }


  
  get authenticated(): boolean{
    return this.authState !== null
  }

  get currentUserId(): string{
    return this.authenticated ? this.authState.uid : null;
  }

  emailSignin(email: string, password: string){
    return this.afAuth.signInWithEmailAndPassword(email, password)
    .then(()=> console.log("sesion iniciada correctamente"))
    .catch(error => console.log(error.message))
  }

  emailSignUp(email: string, password: string ){
    return this.afAuth.createUserWithEmailAndPassword(email, password)
    .then(user => {
      this.updateUserData(user)})
    .then(() => console.log("cuenta creada correctamente"))
    .then(async user => {
      (await this.afAuth.currentUser).sendEmailVerification()
      .then(() => console.log("te enviamos correo de verificacion a tu email"))
      .catch(error => console.log(error.message))
    })
    .catch(error => console.log(error))
  }

  resetPassword(email: string){
    return this.afAuth.sendPasswordResetEmail(email)
    .then(() => console.log("te hemos enviado un link para resetear tu contrase;a"))
    .catch(error => console.log(error.message))
  }

  signOut(){
    return this.afAuth.signOut()
     .then(() => {
       this.router.navigate(['/'])
     })
  }



  updateUserData(user){
    var usuario = user.user;

    console.log("updateuserdata",usuario);
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`user/${usuario.uid}`);
    const data: User = {
      id: usuario.uid,
      email: usuario.email || null,
      photUrl:  usuario.photoURL,
      //name: usuario.displayName,
      rol: this.servicerole.rol|| null,
      
    }

    if(data.rol == "estudiante"){
      this.afs.collection<any>('student').add(
        {
          user:data,
          classrooms:[
         ],
        }
      )
   }
   if(data.rol == "profesor"){
     this.afs.collection<any>('teacher').add(
       {
         user:data ,
       }
     )
   }
   if(data.rol == "apoderado"){
     this.afs.collection<any>('parent').add(
       {
         user:data
       }
     )
   }

  
   
    return userRef.set(data, {merge: true})
  }

  get_statusconexion(){
    this.servece_linea.statusConexion.
     subscribe(
       online =>{
        if(online){
            console.log("esta conectado")

        }else{
          console.log("esta desconectado")
        }

       }
     )
  }  
}

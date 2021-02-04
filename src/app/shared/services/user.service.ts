import { User } from 'src/app/shared/models/user.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  users : AngularFirestoreCollection<User>
  iuser: Observable<User[]>;
  constructor(
    private afuser: AngularFirestore,
  )
  {

  }
  getusuario(id:string){
    this.users =this.afuser.collection<User>('user', ref =>{
      return ref  
      .where('id', '==', id)}
      );    
    return this.iuser = this.users.valueChanges();
  }
  
  user_indetif(email:string){
    this.users =this.afuser.collection<User>('user', ref =>{
            return ref  
            .where('email', '==', email)}
            );
   return this.iuser = this.users.valueChanges();
  }

}

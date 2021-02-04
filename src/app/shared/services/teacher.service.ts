import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { Teacher } from '../models/teacher.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  teacher:Teacher = new Teacher()
  users : AngularFirestoreCollection<Teacher>
  iuser: Observable<Teacher[]>;
  constructor(
    private afuser: AngularFirestore,
    
  ){ }

   user_indetif(id:string){
      this.users =this.afuser.collection<Teacher>('teacher', ref =>{
            return ref  
            .where('user.id', '==', id)}
            );
    return this.iuser = this.users.valueChanges();
  }
  
}

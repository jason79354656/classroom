import { Classroom } from './../models/classroom.model';
import { AngularFirestore , AngularFirestoreCollection } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ClassromService {
  fClassrroms : AngularFirestoreCollection<Classroom>;
  classrooms  :Observable<Classroom[]>;
  
  constructor(private afs: AngularFirestore) { }

  public getAllClassroms():Observable<Classroom[]>{
     return this.afs.collection('classroms').snapshotChanges().pipe(
       map(actions => actions.map(a =>{
         const data = a.payload.doc.data() as Classroom;
         const id = a.payload.doc.id;
         return { id, ...data };
       }))
     )
  }
  public getOneClassrom(id:Classroom):Observable<Classroom>{
    return this.afs.doc<Classroom>(`classroms/${id}`).valueChanges();
  }
  
  public getcodeClassrom(code_mat:string){
    this.fClassrroms =this.afs.collection<Classroom>('classroom', ref =>{
      return ref  
      .where('codeMat', '==', code_mat)}
      );
    return this.fClassrroms.snapshotChanges();  
  }
  
  create(data: Classroom){
    this.afs.collection<Classroom>('classroom').add(data);
  }

  public get_authorClass(autorId:string){
    this.fClassrroms =this.afs.collection<Classroom>('classroom', ref =>{
      return ref  
      .where('authorId', '==', autorId)}
      );
    return this.fClassrroms.snapshotChanges();  
  }
}


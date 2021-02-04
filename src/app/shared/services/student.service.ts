import { Observable } from 'rxjs';
import { Student } from './../models/student.model';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/firestore';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class StudentService {
  fire_stud : AngularFirestoreCollection<Student>;
  student:Observable<Student[]>;
  
  constructor(
    private afstudent: AngularFirestore,
  ) { }

  get_student(id:string ){
    this.fire_stud = this.afstudent.collection<Student>('student', ref =>{
        return ref  
        .where('user.id', '==', id)}
        );    
      return this.student = this.fire_stud.valueChanges();
    }

    public update_student(documentId: string, data: any) {
      return this.afstudent.collection('student').doc(documentId).set(data);
    }  
}

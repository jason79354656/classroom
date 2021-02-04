import { Injectable } from '@angular/core';
import { 
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
 } from '@angular/fire/firestore';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  taskCollection: AngularFirestoreCollection<Task>

  constructor(
    private afs: AngularFirestore,
  ) {
    this.taskCollection = this.afs.collection("teacherActivities")
   }

  create(data: Task){
    return this.taskCollection.add(data)
  }
}

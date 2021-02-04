import { Role } from '../models/role.model';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RoleService {
  rol:string
  constructor(private afs: AngularFirestore) { }

  
  changes_role(rol:string){
    this.rol = rol; 
    
  }
  
}


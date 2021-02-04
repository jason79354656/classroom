import { AcountService } from './../../shared/services/acount.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , FormBuilder, Validators } from '@angular/forms';
import { RoleService } from 'src/app/shared/services/role.service';
import { Role } from 'src/app/shared/models/role.model';

import { finalize, tap } from 'rxjs/operators';
import { UserService } from './../../shared/services/user.service';
import { Router } from '@angular/router';
import { AngularFireStorage,AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs/internal/Observable';
import { IdbAcountService } from 'src/app/shared/services/idb-acount.service';
import { OnlineOfflineService } from 'src/app/shared/services/online-offline.service';
import { IfStmt } from '@angular/compiler';
//import {Account} from './../../shared/models/account.model'


@Component({
  selector: 'app-form-crear',
  templateUrl: './form-crear.component.html',
  styleUrls: ['./form-crear.component.css']
})
export class FormCrearComponent implements OnInit {

  uploadPercent: Observable<number>;
  urlImage: Observable<string>;
  public snapshot: Observable<any>;
  signUpForm: FormGroup;
  hide = true;
  rol:string;
  account:Account;

  constructor(
    public fb: FormBuilder,
    private auth: AcountService,
    private router: Router,
    private roleservice: RoleService,
    private storage: AngularFireStorage,
    private idb_acount : IdbAcountService,
    private line : OnlineOfflineService 
  ) {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['',[
        //Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-z0-9]+)$'),
        Validators.minLength(6),
        Validators.maxLength(25)]
      ]
    })
  }

  
  ngOnInit() {
    this.rol = this.roleservice.rol;
    this.idb_acount.all_acounts();
  }

  get email(){
    return this.signUpForm.get('email').value;
  }

  get password(){
    return this.signUpForm.get('password').value;
  }

  signUp(email:string,password:string){
      
    if (this.line.isOnline){
        this.auth.emailSignUp(email,password )
        .then(user => {
            if (this.roleservice.rol == "estudiante"){
              this.router.navigate(['/'])
            }
            if( this.roleservice.rol == "profesor"){
              this.router.navigate(['/'])
            }
      })
       
    }else{
     // this.account.id = "sss" ;
      this.account.displayName = email;
      this.idb_acount.save_acount(this.account);
    }
  
  }


  onUpload(e) {
     console.log('subir', e.target.files[0]);
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/perfil_${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    this.snapshot = task.snapshotChanges().pipe(
      tap(console.log),
      finalize(async () => {
        this.urlImage = await ref.getDownloadURL().toPromise()
        console.log("photo",this.urlImage)
      }));

     
  }
}

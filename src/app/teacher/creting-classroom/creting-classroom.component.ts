import { Component, OnInit } from '@angular/core';
import { Classroom } from '../../shared/models/classroom.model';
import { AcountService } from '../../shared/services/acount.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ClassromService } from 'src/app/shared/services/classrom.service';
import { UserService } from 'src/app/shared/services/user.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-creting-classroom',
  templateUrl: './creting-classroom.component.html',
  styleUrls: ['./creting-classroom.component.css']
})
export class CretingClassroomComponent implements OnInit {
  codeMat: string;
  image: any;
  classroomForm: FormGroup;
  imageURL: string;
  uploadPercent: Observable<number>
  downloadURL: Observable<string>
  id: string ;
  classrom:Classroom;
  id_teacher: string;
  
  constructor(
    private classroomService: ClassromService,
     private storage: AngularFireStorage,
    private auth: AcountService,
    private fb: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {
    this.createForm()
    this.codeMat = Math.random().toString(36).substring(2);
    this.route.paramMap.subscribe(params =>{
      this.id_teacher =  params.get("id")
    })
  }

  createForm(){
    this.classroomForm = this.fb.group({
      name: [''],
      description: ['']
    })
  }

  saveClass(data: Classroom){
    this.codeMat = Math.random().toString(36).substring(2);
    console.log(this.id_teacher)
    this.classrom = {
      codeMat: this.codeMat,
      name: this.classroomForm.get('name').value,
      description: this.classroomForm.get('description').value,
      img : this.imageURL,
      authorId: this.auth.currentUserId
    
    }


    if(!this.classroomForm.untouched){
      console.log("antes")
      this.classroomService.create(this.classrom)
      
    }
    console.log("save")
    console.log("reset")
    this.classroomForm.reset()
    console.log("reseteado")
    this.imageURL = ''
    
  }


  handleImage(event){
    this.image = event.target.files[0];
    console.log('handleImage', this.image)
  }

 
  uploapClassImage(event) {
    const file = event.target.files[0];
    const filePath=`images/${file.name}`
    const fileRef = this.storage.ref(filePath);
     const task = this.storage.upload(filePath, file)
     task.snapshotChanges()
     .pipe(
       finalize( ()=> {
         fileRef.getDownloadURL().subscribe(urlImage => {
           this.downloadURL = urlImage;
           this.imageURL = urlImage;
           console.log("URL IMAGE", urlImage)
           this.uploadPercent = task.percentageChanges()
           console.log("image uploaded")
         })
       })
     ).subscribe();
     
   }



}

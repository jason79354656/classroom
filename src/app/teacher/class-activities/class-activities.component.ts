import { Component , OnInit, Input } from '@angular/core';
import { Task } from 'src/app/shared/models/task.model';
import { finalize } from 'rxjs/operators';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'
import { Observable } from 'rxjs';
import { TaskService } from 'src/app/shared/services/task.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { AcountService } from 'src/app/shared/services/acount.service';
import { ActivatedRoute,Router } from '@angular/router';
import { ClassromService } from 'src/app/shared/services/classrom.service';

@Component({
  selector: 'app-class-activities',
  templateUrl: './class-activities.component.html',
  styleUrls: ['./class-activities.component.css']
})
export class ClassActivitiesComponent implements OnInit {
   

 
  @Input()   id_classroom: string;;  
  

  image: any;

  taskForm: FormGroup;

  imageURL: string;

  uploadPercent: Observable<number>
  downloadURL: Observable<string>

  constructor(
    private taskService: TaskService,
    private storage: AngularFireStorage,
    private auth: AcountService,
    private fb: FormBuilder,
    private router: Router,
    private route:ActivatedRoute,
    private classroomService: ClassromService
  ) { }

  ngOnInit() {
    this.createForm()
    this.get_id()

    console.log(this.id_classroom)
  }

  createForm(){
    this.taskForm = this.fb.group({
      title: [''],
      content: ['']
    })
  }

  uploapTaskFile(event) {
    const file = event.target.files[0];
    const filePath=`tasksPosts/${file.name}`
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file)
    task.snapshotChanges()
    .pipe(
      finalize( ()=> {
        fileRef.getDownloadURL().subscribe(urlImage => {
          this.downloadURL = urlImage;
          this.imageURL = urlImage;
          console.log("URL FILE", urlImage)
          this.uploadPercent = task.percentageChanges()
          console.log("file uploaded")
        })
      })
    ).subscribe();
  }

  postTask(data: Task){
    console.log("titulo", this.taskForm.get('title').value)
    console.log("content", this.taskForm.get('content').value)
    console.log("id clase:", this.classroomService)
    
    const formData: Task = {
      author:   this.auth.authState.email,                          // this.auth.authState.email,
      authorId:   this.auth.currentUserId, 
      classId: this.id_classroom || null,                     //this.auth.currentUserId,
      title: this.taskForm.get('title').value,
      file: this.imageURL || null,
      content: this.taskForm.get('content').value
    }
    if(!this.taskForm.untouched){
      console.log("antes")
      this.taskForm.reset()
      this.imageURL= ''
      alert("Actividad Publicada")
      console.log("id materia:", formData.classId)
      //this.classroomService.uploadImage(this.image, formData)
      return this.taskService.create(formData)

      
    }
    console.log("save")
    console.log("reset")
    this.taskForm.reset()
    console.log("reseteado")
    this.imageURL = ''
  }

  get_id(){
    
  }

}

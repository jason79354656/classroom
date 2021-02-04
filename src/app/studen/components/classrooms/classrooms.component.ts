import { Student } from './../../../shared/models/student.model';
import { ClassromService } from './../../../shared/services/classrom.service';
import { StudentService } from './../../../shared/services/student.service';
import { Classroom } from './../../../shared/models/classroom.model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {User} from './../../../shared/models/user.model';
import { map } from 'rxjs/operators';
import { AcountService } from 'src/app/shared/services/acount.service';

@Component({
  selector: 'app-classrooms',
  templateUrl: './classrooms.component.html',
  styleUrls: ['./classrooms.component.css']
})

export class ClassroomsComponent implements OnInit {
  id_user: string = "";
  code_mate: string = "";  
  classrom : Classroom 
  user : User;
  classrooms: Classroom[] =[];
  student: Student ;
  classe:Classroom ;

  constructor(
    private route: ActivatedRoute,
    private serviceu : StudentService ,
    private service_class: ClassromService,
    private serviceacuont: AcountService
  ) { }
 
  ngOnInit() {
    this.get_clasrroms();
  }

  get_clasrroms(){
    this.route.paramMap.subscribe(params =>{
      this.id_user =  params.get("id");
      if (params.has("id")){
        this.serviceu.get_student(params.get("id")).subscribe(
          user => {
            this.student = user[0]
            this.classrooms = user[0].classrooms
            console.log(user[0])
          }
        )
      }
    })
  }
  modal_codemat(e){
    this.code_mate = e;
    console.log()
    this.service_class.getcodeClassrom(this.code_mate)
    .subscribe(
      classes => {
        console.log(classes[0].payload.doc.data() as Classroom)
        this.classe = classes[0].payload.doc.data() as Classroom;
        this.classe.id = classes[0].payload.doc.id;
        this.student.classrooms.push(this.classe)
        this.serviceu.update_student(this.serviceacuont.currentUserId,this.student)
        
      }
    )
    
  }

}

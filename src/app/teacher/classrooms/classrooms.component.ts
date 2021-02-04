import { Student } from './../../shared/models/student.model';
import { ClassromService } from './../../shared/services/classrom.service';
import { StudentService } from './../../shared/services/student.service';
import { Classroom } from './../../shared/models/classroom.model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {User} from './../../shared/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classrooms',
  templateUrl: './classrooms.component.html',
  styleUrls: ['./classrooms.component.css']
})
export class ClassroomsComponent implements OnInit {

  id_user: string = "";
  code_mate: string = "";  
  classrom : Classroom ;
  user : User;
  classrooms: Classroom[] =[];
  student: Student ;
  classe:Classroom ;

  constructor(
    private route: ActivatedRoute,
    private serviceu : StudentService ,
    private service_class: ClassromService ,
    private router: Router,
  ) { }
 
  ngOnInit() {
    this.get_clasrroms();
  }

  get_clasrroms(){
    this.route.paramMap.subscribe(params =>{
      
      if (params.has("id")){
        this.service_class.get_authorClass(params.get("id")).subscribe(
          classes => {
            console.log( params.get("id"))
            console.log(classes[0].payload.doc.data())
            for (var i = 0; i < classes.length; i++){
               this.classrom = classes[i].payload.doc.data();
               this.classrom.id = classes[i].payload.doc.id ;
               this.classrooms[i] = this.classrom ;
            }
          }
        )
      }
    })
  }
  
  addclassrom(){
    this.router.navigate(["/teacher",this.id_user,"add-classroom"])
  }

  addActivity(){
    this.router.navigate(["/teacher",this.id_user,"add-activity"])
  }

}

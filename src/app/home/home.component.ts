import { ClassromService } from './../shared/services/classrom.service';
import { Classroom } from './../shared/models/classroom.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //public classroms$ : Observable<ClassromI[]>;

 // active : boolean = true ;
  constructor() {
   }
  ngOnInit() {
   
  }
}

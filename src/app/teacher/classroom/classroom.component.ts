
import { Classroom } from './../../shared/models/classroom.model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';


@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css']
})
export class ClassroomComponent implements OnInit {

 
  @Input()  classroom: Classroom;  
  id_user: string;

  constructor(
    private router: Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.get_id()
  }
  
  enterMateria(id:string){
     this.router.navigate(["/teacher",this.id_user,this.classroom.id]);
  }

  get_id(){
    this.route.paramMap.subscribe(params =>{
      this.id_user =  params.get("id")}  
      )
  }
}

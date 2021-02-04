import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-details-class',
  templateUrl: './details-class.component.html',
  styleUrls: ['./details-class.component.css']
})
export class DetailsClassComponent implements OnInit {
  id_user: string;
  id_classroom: string; 
  constructor(
    private router: Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
  }

  get_id(){
    this.route.paramMap.subscribe(params =>{
      this.id_user =  params.get("id")
      this.id_classroom = params.get("idmat")
    }  
    )
  }
  // redirect_acti(){
  //   this.router.navigate(["/teacher",this.id_user,this.id_classroom,"actividades"]);
  //  }
}

import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/shared/services/role.service';
import { Role } from 'src/app/shared/models/role.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent implements OnInit {
   
  rol:Role;
  constructor(
    private roleservicio: RoleService
  ) { }

  ngOnInit() {
  
  }


  
  get_teacher(){
   
    this.roleservicio.changes_role("profesor")
  }
  get_student(){
   this.roleservicio.changes_role("estudiante")
  }

  get_apearado(){
   
    this.roleservicio.changes_role("apoderado")
    
  } 

  
}

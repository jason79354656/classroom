import { AcountService } from './../../shared/services/acount.service';
import { Component, OnInit ,Input} from '@angular/core';
import { RoleService } from '../services/role.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public rol_color: string;
  public visual: boolean = true;

 constructor(
   public authSvc: AcountService,
   private rolservice: RoleService
  ) { }

  ngOnInit() {
     if(this.authSvc){
       this.visual = true; 
     }else{
       this.visual = false;
    }
    console.log(this.authSvc.authenticated)

  }

  set_color(role:string){
    this.rolservice.changes_role(role)
    console.log(this.rolservice.rol)
   }

  onLogout():void{
     this.authSvc.signOut();
  }
  }


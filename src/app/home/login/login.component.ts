import { User } from './../../shared/models/user.model';
import { UserService } from './../../shared/services/user.service';
import { AcountService } from './../../shared/services/acount.service';
import { Account } from './../../shared/models/account.model';


import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RoleService } from 'src/app/shared/services/role.service';
import { OnlineOfflineService } from 'src/app/shared/services/online-offline.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id: string = "";
  
  user : User = {};
  constructor(
    private router: Router,
    private authSvc: AcountService,
    private userser: UserService,    
    private rolservice : RoleService ,
    private line_service:OnlineOfflineService,     
  ) { }
 
  ngOnInit() {
    
  }
  
  verifyUser(username: string, password: string){
    
    if(this.line_service.isOnline) {
    this.authSvc.emailSignin(username,password).then(
    )
        this.userser.user_indetif(username).subscribe(
          val => {
            this.id = val[0].id 
            if(val[0].rol == "estudiante"){
              this.router.navigate(["/student",this.id]) 
            }
            if(val[0].rol == "profesor"){
              this.router.navigate(["/teacher",this.id]) 
            }
            if(val[0].rol == "apoderado"){
              this.router.navigate(["/parent",this.id]) 
            }
        
        });
      } else{
         console.log("fuera de linea");
      }
    } 
   
}
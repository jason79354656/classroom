import { Component, OnInit,  Input, Output ,EventEmitter} from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-register-mat',
  templateUrl: './register-mat.component.html',
  styleUrls: ['./register-mat.component.css']
})
export class RegisterMatComponent implements OnInit {
  registerForm = new FormGroup(
    {
      code: new FormControl(''),
    }
  )
  @Output() code_mat = new EventEmitter();
  show: boolean = false;
  public codigo: any;
  

  showModal(){
    this.show = !this.show;
  }
  procesar( code_mate: string){
    alert(code_mate);
    this.code_mat.emit(code_mate)
  }
  constructor() { }

  ngOnInit() {
  }

}

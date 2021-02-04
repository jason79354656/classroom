import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/shared/models/account.model';
import { AcountService } from 'src/app/shared/services/acount.service';

@Component({
  selector: 'app-collages',
  templateUrl: './collages.component.html',
  styleUrls: ['./collages.component.css']
})
export class CollagesComponent implements OnInit {

  actividad:string 
  constructor(
    private acount: AcountService,
  ) { }

  ngOnInit() {
    
  }


}

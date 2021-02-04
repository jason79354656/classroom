import { Classroom } from './../shared/models/classroom.model';
import { AcountService } from './../shared/services/acount.service';
import { Account } from './../shared/models/account.model';
import { Component, OnInit,Input  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassromService } from './../shared/services/classrom.service';
import { AngularFirestore, AngularFirestoreModule,AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-studen',
  templateUrl: './studen.component.html',
  styleUrls: ['./studen.component.css']
})

export class StudenComponent implements OnInit {
 // @Input()  regMat: RegisterMatComponent
  //public regMat: RegisterMatComponent
/*
  private cardsCollection: AngularFirestoreCollection<Item>;
  cards: Observable<Item[]>;
  constructor(private afs: AngularFirestore) {
    this.cardsCollection = afs.collection<ClassromI>('classroms',ref => ref.where('name' ,'==','whatever'));
    this.cards = this.cardsCollection.valueChanges();
  }
  addItem() {
    const id = this.afs.createId();

    this.cardsCollection.doc(id).set({ id: id, name: 'whatever' });
  }
  delete(item: Item) {
    this.cardsCollection.doc(item.id).delete();
  }*/

  public classroms$ : Observable<Classroom[]>;
  constructor(
    private route: ActivatedRoute,
    private acountservice: AcountService,
    public ClassRService: ClassromService,
    
  ) { }

  ngOnInit( ) {
    this.route.paramMap.subscribe(params =>{
      if (params.has("id")){
       alert( params.get("id"));
      }
    })
  }
 /*showModalr(){
    this.rm.showModal;
  }*/
}

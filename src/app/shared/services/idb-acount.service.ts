import { Injectable,Injector, NgModule } from '@angular/core';
import Dexie from 'dexie';
//import {Account} from './../../shared/models/account.model'


@Injectable({
  providedIn: 'root'
})
export class IdbAcountService {

  private db:Dexie;
  private table: Dexie.Table<Account, any>=null;
  accounts : Account[];

  constructor() {
    this.beginUndexdb();
   }

   private beginUndexdb(){
      this.db = new Dexie('db-account');
      this.db.version(1).stores(
        {
          account: 'id'
        });

      this.table = this.db.table('account')
   }

   public  async save_acount(account:Account){
    console.log(account)
    try{
         await this.table.add(account);

    }catch{
      console.log("carajo error")
    }
   
    }

   public async all_acounts(){
     console.log( await this.table.toArray())
      this.accounts = await this.table.toArray();
      console.log(this.accounts)
    }

}

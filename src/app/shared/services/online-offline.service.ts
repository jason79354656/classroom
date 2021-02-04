import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnlineOfflineService {

  private conexion = new Subject<boolean>();

  constructor() { 
    window.addEventListener('online', () => console.log('esta online'));
    window.addEventListener('offline', () => console.log('esta offline'));

  }

  get isOnline(): boolean{
    return !!window.navigator.onLine
  }

  get statusConexion(): Observable<boolean>{
    return  this.conexion.asObservable();
  }

  updateconexion(){
    this.conexion.next(this.isOnline)
  }
}

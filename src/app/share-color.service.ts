import { Injectable } from '@angular/core';
import { Subject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ShareColorService {
  
  private notifs = new Subject<boolean>() ;

  constructor() { }

  public getColor(): Observable<boolean>{
    return this.notifs.asObservable() ; 
    }

  public updateColor(color: boolean){
    this.notifs.next(color) ;
  }
}

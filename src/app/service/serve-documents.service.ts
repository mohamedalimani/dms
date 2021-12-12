import { Injectable } from '@angular/core';
import {Subject,Observable} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServeDocumentsService {

  private notifs = new Subject<Object>() ;

  backendUrl = 'http://localhost:3000/api' ;
  headers = new HttpHeaders().set('Content-Type','application/json') ;

  constructor(private http:HttpClient) { }

  //get all documents
  getDocuments(){
    return this.http.get(this.backendUrl) ;
  }
  //make request to backend to search for a document by it's name 
  getDocument(name){
    return this.http.get(this.backendUrl+'/'+name) ; 
  }
  
  updateDocument(name){
    return this.notifs.next(name) ;
  }
  getOneDocument(){
    return this.notifs.asObservable() ;
  }
  //post document
  postDocument(data){
    return this.http.post(this.backendUrl +'/post',data) ;
  }
  //edit one book by it's name
  editDocument(name, data){
    return this.http.put(this.backendUrl +'/edit/'+name,data) ;
  }
  // delete one book by it's name
  deleteDocument(name){
    console.log("u're gonna delete this document",name)
    return this.http.delete(this.backendUrl+'/delete/'+name) ; 
  }
  

}


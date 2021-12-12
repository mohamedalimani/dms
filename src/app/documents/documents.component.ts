import { Component, OnInit } from '@angular/core';
import { ShareColorService } from '../share-color.service';
import { ServeDocumentsService } from '../service/serve-documents.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  status:boolean = true ;
  color:boolean ;
  documents:any = [] ; 
  public subscription: Subscription ; 

  constructor(private colorService:ShareColorService,private apiService:ServeDocumentsService) {
    this.showDocuments() ; 
   }

   changeTheme(){
    this.status = !this.status ;
    this.colorService.updateColor(this.status) ; 
  } ;

  //get all documents
  showDocuments(){
    this.apiService.getDocuments().subscribe((data)=>{
      this.documents = data ;
    })
  }
  ngOnInit(): void {
    this.subscription = this.apiService.getOneDocument().subscribe(searchedDocumentname=>{
      this.apiService.getDocument(searchedDocumentname).subscribe((data=>{
        this.documents = data ;
      }))
    }) ; 
  }

}

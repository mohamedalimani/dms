import { Component, OnInit } from '@angular/core';
import {ServeDocumentsService} from './../service/serve-documents.service'
@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.css']
})
export class AddDocumentComponent implements OnInit {

  constructor(private apiService:ServeDocumentsService) { }

  ngOnInit(): void {
  }
  onSubmit(f){
    this.apiService.postDocument(f.value).subscribe(res=>{console.log('back response:',res)}) ;
  }

}

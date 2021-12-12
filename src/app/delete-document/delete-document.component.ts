import { ServeDocumentsService } from './../service/serve-documents.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-document',
  templateUrl: './delete-document.component.html',
  styleUrls: ['./delete-document.component.css']
})
export class DeleteDocumentComponent implements OnInit {

  constructor(private apiService:ServeDocumentsService) { }

  ngOnInit(): void {
  }
  onSubmit(f){
    //console.log(f) ; 
    this.apiService.deleteDocument(f.value).subscribe(x => console.log(x)) ;
  }

}

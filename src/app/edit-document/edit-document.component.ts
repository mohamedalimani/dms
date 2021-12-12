import { NavbarComponent } from '../navbar/navbar.component';
import { Component, OnInit } from '@angular/core';
import { ServeDocumentsService } from '../service/serve-documents.service';

@Component({
  selector: 'app-edit-document',
  templateUrl: './edit-document.component.html',
  styleUrls: ['./edit-document.component.css']
})
export class EditDocumentComponent implements OnInit {

  constructor(private apiService:ServeDocumentsService) { }

  ngOnInit(): void {
  }

   onSubmit(f){
    console.log(f.Doc.value) ; 
    this.apiService.editDocument(f.Doc.value,f.value).subscribe( res => {console.log('backend\' response:',res)});
   }
}

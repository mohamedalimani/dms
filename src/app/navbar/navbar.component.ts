import { ServeDocumentsService } from './../service/serve-documents.service';
import { ShareColorService } from './../share-color.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public navbarNewColor:boolean = true;
  public subscription: Subscription ;
  public oneDocument ; 
  constructor(private colorService:ShareColorService, private serveDocument:ServeDocumentsService) { }

  public ngOnDestroy(): void{
    this.subscription.unsubscribe() ;
  }

  ngOnInit(): void {
    this.subscription = this.colorService.getColor().subscribe(color => this.navbarNewColor = color) ; 
  }
  //GET ONE DOCUMENT BY 
  searchDocument(f){
    this.serveDocument.updateDocument(f.searchedDocument) ; 
  }
}

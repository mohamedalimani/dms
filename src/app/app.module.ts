import { ServeDocumentsService } from './service/serve-documents.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DocumentsComponent } from './documents/documents.component';
import { AddDocumentComponent } from './add-document/add-document.component';
import { DeleteDocumentComponent } from './delete-document/delete-document.component';
import { EditDocumentComponent } from './edit-document/edit-document.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes:Routes = [
  {path:'',component:DocumentsComponent},
  {path:'post',component:AddDocumentComponent},
  {path:'edit',component:EditDocumentComponent},
  {path:'delete',component:DeleteDocumentComponent},
  {path:'**',component:NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DocumentsComponent,
    AddDocumentComponent,
    DeleteDocumentComponent,
    EditDocumentComponent,
    FooterComponent,
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  exports:[RouterModule],
  providers: [ServeDocumentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

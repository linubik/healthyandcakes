import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BoutiqueComponent } from "./boutique/boutique.component";
import { RayonComponent } from './rayon/rayon.component';
import { ProduitComponent } from './produit/produit.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ 
    BoutiqueComponent,
    RayonComponent,
    ProduitComponent
   ],
  bootstrap:    [
    BoutiqueComponent
     ]
})
export class AppModule { }

import { Component, Input } from '@angular/core';

import { Produit } from '../model/produit';

@Component({
  selector: 'produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})

export class ProduitComponent  {
  @Input() produit : Produit;
}
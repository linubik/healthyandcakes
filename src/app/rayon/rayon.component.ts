import { Component, Input } from '@angular/core';

import { Produit } from '../model/produit';

@Component({
  selector: 'rayon',
  templateUrl: './rayon.component.html',
  styleUrls: ['./rayon.component.css']
})
export class RayonComponent  {
  @Input() nom: string;
  @Input() produits: Produit[];
}
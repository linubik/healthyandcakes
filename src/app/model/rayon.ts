import { Produit } from './produit';

export class Rayon {

  constructor(public nom : string) {
  }

  produits : Produit[] = [];
}
import { Produit } from './produit';
import { Rayon } from './rayon';

export class LigneProduit {
  rayon : Rayon;
  produit : Produit;
  constructor(nomRayon:string,nomProduit:string,goutsProduit:string,noteProduit:number,prixProduit:number){
    this.rayon = new Rayon(nomRayon);
    this.produit = new Produit(nomProduit,goutsProduit,prixProduit,noteProduit);
  }
}
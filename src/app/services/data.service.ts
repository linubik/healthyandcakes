import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { LigneProduit } from '../model/ligneProduit';
import { Produit } from '../model/produit';

@Injectable({
  providedIn: 'root',
})
export class DataService {

public rayons : Map<string,Produit[]> = new Map();

constructor(private http: HttpClient){
    this.http.get('assets/csv.csv', {responseType: 'text'})
    .subscribe(
        data => {
            let csvToRowArray = data.split("\n");
            for (let index = 1; index < csvToRowArray.length - 1; index++) {
              let row = csvToRowArray[index].split(",");
              let ligneProduit = new LigneProduit( row[0], row[1],row[2],parseInt(row[3]),parseInt(row[4]));
              let nomRayon = ligneProduit.rayon.nom;
              let nomProduit = ligneProduit.produit.nom;
              if (!this.rayons.has(nomRayon))
              {
                this.rayons.set(nomRayon,[])
              }
              this.rayons.get(nomRayon).push(ligneProduit.produit);
            }
            console.log(this.rayons);
        },
        error => {
            console.log(error);
        }
    );
  }
  
}
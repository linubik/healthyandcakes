import { Component, Input, ElementRef } from '@angular/core';
import { DataService } from '../services/data.service';

import { Produit } from '../model/produit';

@Component({
  selector: 'boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css']
})

export class BoutiqueComponent  {
  nom: string;
  rayons: Map<string,Produit[]>;
  constructor(private elementRef:ElementRef,dataService: DataService) {
    this.nom = this.elementRef.nativeElement.getAttribute('nom');
    //this.rayons = this.elementRef.nativeElement.getAttribute('rayons').split(',');
    this.rayons = dataService.rayons;
  }
}
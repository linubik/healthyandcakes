export class Produit {
  image : string;
  constructor (public nom : string,public gouts : string, public prix : number, public note : number, imageProduit:string) {
    if (imageProduit != null && imageProduit!= '')
    {
      this.image = 'https://raw.githubusercontent.com/linubik/healthyandcakes/master/src/assets/'+imageProduit;
    }
    else
    {
      this.image = "https://source.unsplash.com/400x200/?"+this.nom+","+this.gouts;
    }
  }
}
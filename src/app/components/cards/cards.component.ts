import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent{

  @Input() items: any[] = [];

  constructor(private _router: Router) { }

  seeArtist(item:any, event:any) {
    let artistID;
    if(item.type === 'artist') {
      artistID = item.id;
    } else {
      artistID = item.artists[0].id;
    }
    
    this._router.navigate(['/artist', artistID])
    
  }

}

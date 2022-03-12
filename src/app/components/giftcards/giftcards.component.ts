import { Component, OnInit } from '@angular/core';
import { Giftcard } from '../../models/giftcard';

import { GiftcardService } from '../../services/giftcard.service';

import { Global } from '../../services/global';//para sacar la  url de la api


@Component({
  selector: 'app-giftcards',
  templateUrl: './giftcards.component.html',
  styleUrls: ['./giftcards.component.css']
})
export class GiftcardsComponent implements OnInit {
public giftcards: Giftcard[]=[]; //este array publica es la que tendran los objetos JSON.
  constructor(
private _giftcardService: GiftcardService
    ) { }

  ngOnInit(): void {
     this.getGiftcards();
  }

getGiftcards(){
    
    this._giftcardService.getGiftcards().subscribe( //subsicribimos al observable y leemos la respuesta que nos lee por la api
      response => {//primera funcion de callback
        if(response.giftcards){
          this.giftcards = response.giftcards; //
          console.log(response.giftcards);
          
        }
      },
      error => { //segunda funcion de callback
        console.log(<any>error);
      }
    );
  }


}

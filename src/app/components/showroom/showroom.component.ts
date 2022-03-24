import { Component, OnInit } from '@angular/core';
import {Giftcard} from '../../models/giftcard';
import{GiftcardService} from '../../services/giftcard.service';
import {Router } from '@angular/router';


@Component({
  selector: 'app-showroom',
  templateUrl: './showroom.component.html',
  styleUrls: ['./showroom.component.css']
})
export class ShowroomComponent implements OnInit {


private giftcard : Giftcard;

  constructor(private _giftcardService: GiftcardService,  private router: Router) {
  this.giftcard= new Giftcard('','',0,'','','','','',0,0,0,'','',0);  }

  ngOnInit(): void {
 /*window.location.href = this.router.navigate("");*/
  
console.log(this.giftcard.amount);
  }



 checkout5000(){


this.router.navigate(['/buy-giftcard'], { queryParams: { amount: this.giftcard.amount=5000} });
this.giftcard= new Giftcard('','',0,'','','','','',0,0,0,'','',0);
 window.scrollTo(0, 0);  
console.log(this.giftcard);

}

checkout10000(){
this.giftcard= new Giftcard('','',0,'','','','','',0,0,0,'','',0);
this.router.navigate(['/buy-giftcard'], { queryParams: { amount: this.giftcard.amount=10000} });
 window.scrollTo(0, 0);
}

}

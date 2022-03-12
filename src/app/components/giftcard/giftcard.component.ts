import { Component, OnInit } from '@angular/core';
import{Giftcard} from '../../models/giftcard';//sali del directorio de create , sali del directorio de compomnentes y entras al de modelos
import{GiftcardService} from '../../services/giftcard.service';
//importo la clase y el servicio
import{Global} from '../../services/global';
import {Router,ActivatedRoute, Params} from '@angular/router' //invocamos estas clases
//ya que vamos a tener que recoger los datos (id) que nos llegan para saber cual 
//projecto devolver 


@Component({
  selector: 'app-giftcard',
  templateUrl: './giftcard.component.html',
  styleUrls: ['./giftcard.component.css']
})
export class GiftcardComponent implements OnInit {

  public url: string;
  public giftcard: Giftcard; 
  public confirm: boolean;


  constructor( 
private _giftcardService: GiftcardService,
private _router: Router,
private _route: ActivatedRoute
) { 

this.url=Global.url;
this.giftcard=new Giftcard('','',0,'','','','','',0,0,0,'','',0);
this.confirm=false;

  }

  ngOnInit(): void {
      this._route.params.subscribe(params =>{ //SUBSCRIBE PARA RECIBIR LOS PARAMETROS
      let id= params.id; //
      this.getProject(id);
    });

  }

      getProject(id:any){
// MANDA PEICIO AJAX AL BACKEND
        this._giftcardService.getGiftcard(id).subscribe(
          response=>{  //Response es el objeto que llega de la API
            this.giftcard=response.giftcard;

        },
        error=>{
          console.log(<any>error);
        })

    }


      deleteGiftcard(id:any){
        this._giftcardService.deleteGiftcard(id).subscribe(
          response=>{
             console.log(response);
            if (response.giftcadrd){
              this._router.navigate(['/giftcards']);
            }

                  },
                  error=> {
                    console.log(<any>error);
                    console.log("Ha ocurrido un error al eliminar la giftcard. Por favor verifique manualmente si se ha borrado de la sección /giftcard");
                  }
        );

      }
     

      setConfirm(confirm:any){
      this.confirm=confirm;

      }



}


//le importamos todos los modulos necesarios para crear el servicio

import {Injectable} from '@angular/core';
//http para hacer peticiones Ajax
import{HttpClient, HttpHeaders} from '@angular/common/http';
//importamos la clase OBservable de la libreria rxjs
import{Observable} from 'rxjs';
//importamos la clase
import{Giftcard} from '../models/giftcard';
//importamos el fichero de variables globales
import {Global} from './global';


//con el el decorador Inyectable
@Injectable()
export class GiftcardService{


	public url: string;

	constructor(private _http: HttpClient)	{
		this.url= Global.url;
		}
	//metodo para probar
		testService(){
		return ' Probando el servicio de Angular';
		}
	//metodo para guardar datos del formulario en la base de datos.
		saveGiftcard(giftcard: Giftcard):Observable<any>{

		let params = JSON.stringify(giftcard);
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.post(this.url+'save-giftcard',params,{headers: headers});
		}


		buyGiftcard(giftcard: Giftcard):Observable<any>{

		let params = JSON.stringify(giftcard);
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.post(this.url+'checkout',params,{headers: headers});
		}




		//metodo para obtener un JSON de todos los proyectos de las base de datos.
		//no le pasamos nada por que va a listar todo
		// va a devolver un observable de cualquier tipo
		getGiftcards():Observable<any>{
			//usamos set para decirle como le enviamos la info: con un contet type aplication JSON
		let headers= new HttpHeaders().set('Content-Type','application/json');

		return this._http.get(this.url+'giftcards',{headers: headers});

		//hacemos la peticion ayax por get, consumimos la url de nuestra a api, 
		//segmento de la ruta completo
		//segundo parametro: headers
		//de esa manera hace la peticion ayax
		}

		getGiftcard(id:any):Observable<any>{
			//usamos set para decirle como le enviamos la info: con un contet type aplication JSON
		let headers= new HttpHeaders().set('Content-Type','application/json');

		return this._http.get(this.url+'giftcard/'+id,{headers: headers}); ///hacemos una
		//peticion por get  al url de nuestra api a nuestra ruta concrecta prject

		//hacemos la peticion ayax por get, consumimos la url de nuestra a api, 
		//segmento de la ruta completo
		//segundo parametro: headers
		//de esa manera hace la peticion ayax
		}


		deleteGiftcard(id:any):Observable<any>{
			let headers= new HttpHeaders().set('Content-Type','application/json');

			return this._http.delete(this.url+'giftcard/'+id,{headers: headers});
		} /// lo unico que cambia es despues del http. DELETE

		updateGiftcard(giftcard:any): Observable<any>{
			let params=JSON.stringify(giftcard);
			let headers= new HttpHeaders().set('Content-Type','application/json');
			return this._http.put(this.url+'giftcard/'+giftcard._id,params,{headers:headers});

		}
}
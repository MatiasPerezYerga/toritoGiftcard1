import {Injectable} from '@angular/core';
import {Global} from './global';

@Injectable()  // para definir mi servicio que tenga inyeccion de dependencia
//CREO UN SERVICIO EXPORTABLE CON SUS ATRIBUTOS, METODOS y constructores:
export class UploadService{
	

	public url:string;

	constructor(){
	this.url=Global.url

	}


//METODO PARA REALIZAR UNA PETICION AjAX CLASICA con una imagen adjunta


// //nombre de los parametros que recibe el backend
	makeFileRequest(url: string, params: Array<string>, files: Array<File>, name: string){
		return new Promise(function(resolve, reject){ //creamos promesa con fc de Call back con resolve y reject
			var formData: any =new FormData(); // objeto tipo FormData()
			
			//declaramos como un formulario un objeto

			var xhr = new XMLHttpRequest(); //tipico objeto de peticiones asincronas

			// xhr es un sinonimo de AYAX
			///XMLHttpRequest es el OBJETO CLASICO de peticion ayax

			//hacemos un for para recorrer los principales files que estan llegando

			for(var i=0; i<files.length;i++){
				formData.append(name,files[i],files[i].name);
			}
			//recorre todos los ficheros y adjuntalos al formulario con el nombre, el archivo mismo, y el file.name, r
			

//PETICION AjAX


			xhr.onreadystatechange= function(){ // CUANDO HAYA ALGUN CAMBIO
				if(xhr.readyState==4){ // VALORES Q FUNCIONAN ASI
					if(xhr.status==200){ // VALORES Q FUNCIONAN ASI
						resolve(JSON.parse(xhr.response));

					}else{//EN CASO QUE NO SEAN VALORES 4 Y 200, REJECTAMOS LA RESPONSE
						reject (xhr.response);
					}
				}

			}
//la peticion por post Y SUS 3 PARAMETROS.
			xhr.open('POST',url,true);
			xhr.send(formData);//ENVIO TODO EL FORMULARIO.
		});
	}
//ESTA PETICION AjAX PERMITE SUBIR NUEVOS ARCHIVOS AL BACKEND

}
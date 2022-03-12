export interface JwtResponseI {

//Nuestra devuelve un objeto con la dataUser:

		dataUser:{
			id: number,
			name: string,
			email: string,
			accessToken: string,
    		expiresIn: string

		}
}

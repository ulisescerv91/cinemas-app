/**
 * Aqui se define que es lo que se hara cuando se mandan llamar  lo que fue declarado en el types.js
 */
import { GET_MOVIES } from '../types.js';

export default ( state, action ) =>{
    const {payload, type} = action; //Payload los datos que me pasan en la funciones

    switch( type ){
        case 'GET_MOVIES': 
            return{
                 ...state,                 
                movies: payload
            }
            //movies: payload -> Esto actualizara la propiedad movies que esta en el MoviesState
        default:{
            return state
        }
    }
}
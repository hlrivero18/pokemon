import axios from "axios";
import { ADD_POKEMONS, CREATE_POKEMON, FILTER_FOR_A, FILTER_FOR_L, ORDER_FOR_ORIGIN, ORDER_FOR_TYPE, RESET_STATE } from "./actions-types";

export const agregarPokemon = (pokemon) => {
    return {
        type: ADD_POKEMONS,
        payload: pokemon
    }
}

export const crearPokemon = (pokemon) => {
    const endPoint = 'http://localhost:3001/pokemons';
    return async (dispatch)=>{
        const response = await axios.post(endPoint, pokemon)
        return dispatch({
            type: CREATE_POKEMON,
            payload: response.data
        })
    }
}

export const ordernarPorTipo = (tipo) =>{
    return{
        type: ORDER_FOR_TYPE,
        payload: tipo
    }
}

export const filtroPorL = (filtro)=>{
    return{
        type: FILTER_FOR_L,
        payload: filtro
    }
} 

export const filtroPorA = (filtro)=>{
    return{
        type: FILTER_FOR_A,
        payload: filtro
    }
} 

export const orderForOrigin = (origen)=>{
    return{
        type: ORDER_FOR_ORIGIN,
        payload: origen
    }
}

export const resetState = ()=>{
    return{
        type: RESET_STATE
    }
}
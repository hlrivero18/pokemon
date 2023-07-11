import { ADD_POKEMONS, CREATE_POKEMON, FILTER_FOR_A, FILTER_FOR_L, ORDER_FOR_TYPE } from "./actions-types";

export const agregarPokemon = (pokemon) => {
    return {
        type: ADD_POKEMONS,
        payload: pokemon
    }
}

export const crearPokemon = (pokemon) => {
    return{
        type: CREATE_POKEMON,
        payload: pokemon
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



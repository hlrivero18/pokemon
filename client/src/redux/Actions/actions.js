import axios from "axios";
import { ADD_POKEMONS, DELETE_POKEMON, FILTER_FOR_A, FILTER_FOR_L, ORDER_FOR_ORIGIN, ORDER_FOR_TYPE, RESET_STATE, POKEMONS_SEARCH, IS_LOADING, ADD_TYPES } from "./actions-types";
import { DELETE, TYPESURL, GET } from "../../consultas";

export const agregarPokemon = () => {
    const endPoint = GET
    return async (dispatch)=>{
        const response = await axios.get(endPoint)
        return dispatch({
            type: ADD_POKEMONS,
            payload: response.data
        })
    }
}

export const borrarPokemon = (pokemon) => {
    const endPoint = DELETE + pokemon.id
    return async (dispatch)=>{
        const response = await axios.delete(endPoint)
        return dispatch({
            type: DELETE_POKEMON,
            payload: response.data
        })
    }
}

export const addTypes = ()=>{
    const endPoint = TYPESURL;
    return async(dispatch)=>{
        const response = await axios.get(endPoint)
        return dispatch({
            type: ADD_TYPES,
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

export const pokemonsSearch = (busqueda)=>{
    return{
        type: POKEMONS_SEARCH,
        payload: busqueda
    }
}

export const loading = (value)=>{
    return{
        type: IS_LOADING,
        payload: value
    }
}
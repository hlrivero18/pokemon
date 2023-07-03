import { ADD_POKEMONS } from "./actions-types";

export const agregarNombre = (pokemon) => {
    return {
        type: ADD_POKEMONS,
        payload: pokemon
    }
}
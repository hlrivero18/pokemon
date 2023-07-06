import { ADD_POKEMONS } from "./actions-types";

export const agregarPokemon = (pokemon) => {
    return {
        type: ADD_POKEMONS,
        payload: pokemon
    }
}
import { ADD_POKEMONS, ORDER_FOR_TYPE, FILTER_FOR_L, FILTER_FOR_A, ORDER_FOR_ORIGIN, RESET_STATE, POKEMONS_SEARCH, IS_LOADING, DELETE_POKEMON, ADD_TYPES } from '../Actions/actions-types';

const initialState = {
    pokemones: [],
    pokemonesDB: [],
    pokemonesAPI: [],
    allPokemones: [],
    types: [],
    pokemonesBusq: [],
    isLoading: true
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POKEMONS:
            return { ...state, pokemones: action.payload.ALL, pokemonesDB: action.payload.DB, pokemonesAPI: action.payload.API, allPokemones: action.payload.ALL }
        case ADD_TYPES:
            return {...state, types: action.payload}
        case ORDER_FOR_ORIGIN:
            if(action.payload === 'DB'){
                return {...state, pokemones: state.pokemonesDB}
            }
            if(action.payload === 'API'){
                return{...state, pokemones: state.pokemonesAPI}
            }
            if(action.payload === 'ALL'){
                return{...state, pokemones: state.allPokemones}
            }
        case ORDER_FOR_TYPE:
            let copia1 = state.allPokemones;
            return {...state, pokemones: copia1.filter(p => {
                return p.types.some(t => t.name === action.payload)
            })}
        case FILTER_FOR_L:
            let copy1 = state.pokemones;
            if(action.payload === 'AA'){
                return {
                    ...state, pokemones: copy1.sort((a, b)=>{
                        if(a.name < b.name) return -1
                        if(a.name > b.name) return 1
                        return 0
                    })
                }
            }else{
                return {
                    ...state, pokemones: copy1.sort((a, b)=>{
                        if(a.name < b.name) return 1
                        if(a.name > b.name) return -1
                        return 0
                    })
                }
            }
        case FILTER_FOR_A:
            let copia3 = state.pokemones;
            if(action.payload === 'AA'){
                return{
                    ...state, pokemones: copia3.sort((a,b)=> b.ataque - a.ataque)
                }
            }else{
                return{
                    ...state, pokemones: copia3.sort((a,b)=> a.ataque - b.ataque)
                }
            }
        case POKEMONS_SEARCH:
            return {
                ...state, pokemones: action.payload
            }
        case IS_LOADING:
            return {
                ...state, isLoading: action.payload
            }
        case DELETE_POKEMON:
            return{
                ...state, pokemones: action.payload.ALL, pokemonesDB: action.payload.DB, allPokemones: action.payload.ALL
            }
        case RESET_STATE:
            return{...state, pokemones: [], pokemonesDB: [], pokemonesAPI: []}
        default: return state
    }

}

export default rootReducer
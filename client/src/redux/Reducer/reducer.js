import { ADD_POKEMONS, ORDER_FOR_TYPE, FILTER_FOR_L, FILTER_FOR_A } from '../Actions/actions-types';

const initialState = {
    pokemones: [],
    allPokemones: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POKEMONS:
            return { ...state, pokemones: action.payload, allPokemones: action.payload }
        case ORDER_FOR_TYPE:
            let copia1 = state.allPokemones;
            return {...state, pokemones: copia1.filter(p => {
                return p.types.some(t => t.name === action.payload)
            })}
        case FILTER_FOR_L:
            let copy1 = state.allPokemones;
            if(action.payload === 'AA'){
                return {
                    ...state, pokemones: copy1.sort((a, b)=>{
                        if(a.name < b.name) return -1
                        if(a.name > b.name) return 1
                        return 0
                    }).map(p => p)
                }
            }else{
                return {
                    ...state, pokemones: copy1.sort((a, b)=>{
                        if(a.name < b.name) return 1
                        if(a.name > b.name) return -1
                        return 0
                    }).map(p => p)
                }
            }
        case FILTER_FOR_A:
            let copia3 = state.pokemones;
            if(action.payload === 'AA'){
                return{
                    ...state, pokemones: copia3.sort((a,b)=> b.ataque - a.ataque).map(p => p)
                }
            }else{
                return{
                    ...state, pokemones: copia3.sort((a,b)=> a.ataque - b.ataque).map(p => p)
                }
            }
        default: return state
    }

}

export default rootReducer
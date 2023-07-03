import { ADD_POKEMONS } from '../Actions/actions-types';

const initialState = {
    pokemones: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POKEMONS:
            return { ...state, pokemones: [...state.pokemones, action.payload] }

        default: return state
    }

}

export default rootReducer
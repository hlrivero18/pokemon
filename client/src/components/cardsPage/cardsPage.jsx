import React, { useEffect} from "react";
import style from './cardsPage.module.css'
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { agregarPokemon, loading} from "../../redux/Actions/actions";
import { OrderFilter } from "../filterOrder/filterOrder";
import { Pagination } from "../paginationPage/paginationPage";

export function CardsPage() {

    const {pokemones} = useSelector(state => state)
    const {isLoading} = useSelector(state => state)
    const dispatch = useDispatch()

    const datos = async () => {
        const { data } = await axios.get('http://localhost:3001/pokemons');
        dispatch(loading(false))
        dispatch(agregarPokemon(data))
    }

    useEffect(() => {
        if(pokemones.length < 1){
            datos()
        }
    }, [pokemones])


    return (
        <div className={style.containerAll}>
            <OrderFilter />
            <div className={style.container}>
                {isLoading ?
                    (<p className={style.loading}>...Cargando</p>)
                    : (
                        pokemones.error ? (<p className={style.loading}>{pokemones.error}</p>)
                        : (
                           <Pagination elementosPorPagina={12} pokemones={pokemones}/> 
                        )
                    )
                }
            </div>

        </div>
    )
}
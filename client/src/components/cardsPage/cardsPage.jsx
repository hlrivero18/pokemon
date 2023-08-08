import React, { useEffect} from "react";
import style from './cardsPage.module.css'
import { useDispatch, useSelector } from "react-redux";
import { agregarPokemon } from "../../redux/Actions/actions";
import { OrderFilter } from "../filterOrder/filterOrder";
import { Pagination } from "../paginationPage/paginationPage";

export function CardsPage() {

    const {pokemones} = useSelector(state => state)
    const {isLoading} = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        if(pokemones.length < 1){
            dispatch(agregarPokemon())
        }
    }, [pokemones, dispatch])


    return (
        <div className={style.containerAll}>
            <OrderFilter />
            <div className={style.container}>
                {isLoading ?
                    (<p className={style.loading}>...Cargando</p>)
                    : (
                        pokemones.error ? (<p className={style.loading}>{pokemones.error}</p>)
                        : (
                           <Pagination elementosPorPagina={12} pokemon={pokemones}/> 
                        )
                    )
                }
            </div>

        </div>
    )
}
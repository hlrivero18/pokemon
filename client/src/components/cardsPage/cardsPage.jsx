import React, { useEffect} from "react";
import style from './cardsPage.module.css'
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { agregarPokemon} from "../../redux/Actions/actions";
import { OrderFilter } from "../filterOrder/filterOrder";
import { Pagination } from "../paginationPage/paginationPage";

export function CardsPage() {

    const {pokemones} = useSelector(state => state)
    const dispatch = useDispatch()

    const datos = async () => {
        const { data } = await axios.get('http://localhost:3001/pokemons');
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
            {console.log(pokemones)}
            <div className={style.container}>
                {pokemones.length < 1 ?
                    (<p className={style.loading}>...Cargando</p>)
                    : (
                        <Pagination elementosPorPagina={12} pokemones={pokemones}/>
                    )
                }
            </div>

        </div>
    )
}
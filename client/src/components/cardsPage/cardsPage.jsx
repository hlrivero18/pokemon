import React, { useEffect, useState } from "react";
import { CardPage } from "../cardPage/cardPage";
import style from './cardsPage.module.css'
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { agregarPokemon } from "../../redux/Actions/actions";
import { OrderFilter } from "../filterOrder/filterOrder";

export function CardsPage() {

    const pokemones = useSelector(state => state.pokemones)
    const dispatch = useDispatch()

    const datos = async () => {
        const { data } = await axios.get('http://localhost:3001/pokemons');
        dispatch(agregarPokemon(data.ALL))
    }

    useEffect(() => {
        if (pokemones < 1) {
            datos()
        }
    }, [pokemones])


    return (
        <div className={style.containerAll}>
            <OrderFilter />
            <div className={style.container}>
                {pokemones.length < 1 ?
                    (<p className={style.loading}>...Cargando</p>)
                    : (pokemones.map((pokemon) => (
                        <CardPage key={pokemon.id} pokemon={pokemon} />
                    ))
                    )
                }
            </div>

        </div>
    )
}

{/* {pokeRedux.map((pokemon) => (
                <CardPage key={pokemon.id} pokemon={pokemon}/>))} */}
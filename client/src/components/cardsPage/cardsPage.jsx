import React, { useEffect } from "react";
import { CardPage } from "../cardPage/cardPage";
import style from './cardsPage.module.css'
import axios from 'axios'
import { useState } from "react";
import { useSelector } from "react-redux";

export function CardsPage() {
    const [pokemones, setPokemones] = useState(null)
    const pokeRedux = useSelector(state => state.pokemones)

    useEffect(() => {
        datos()
    }, [])

    const datos = async () => {
        const { data } = await axios.get('http://localhost:3001/pokemons')
        setPokemones(data.API)
    }

    return (
        <div className={style.container}>
            {pokemones === null ?
                (<p className={style.loading}>...Loadign</p>)
                : (pokemones.map((pokemon) => (
                    <CardPage key={pokemon.id} pokemon={pokemon} />
                ))
                )
            }
        </div>
    )
}

    {/* {pokeRedux.map((pokemon) => (
                <CardPage key={pokemon.id} pokemon={pokemon}/>))} */}
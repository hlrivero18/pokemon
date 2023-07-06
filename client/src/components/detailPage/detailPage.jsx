import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom'
import style from './detailPage.module.css'

export function DetailPage() {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState({})

    const datos = async () => {
        const { data } = await axios.get(`http://localhost:3001/pokemons/${id}`);
        setPokemon(data)
    }

    useEffect(() => {
        datos()
        return setPokemon({})
    }, [id])

    const { name, vida, ataque, defensa, altura, peso, tipos, imagen } = pokemon
    return (
        <div className={style.container}>
            {pokemon === {} ?
                (<p className={style.loading}>...Cargando</p>)
                :
                <div>
                    <img src={imagen} className={style.imagen} alt="imagen de un pokemon" />
                    <div className={style.info}>
                        <h1>{name}</h1>
                        <h3>ID | {id}</h3>
                        <h3>VIDA    |  {vida}</h3>
                        <h3>ATAQUE  |  {ataque}</h3>
                        <h3>DEFENSA |  {defensa}</h3>
                        <h3>ALTURA  |  {altura}</h3>
                        <h3>PESO    |  {peso}</h3>
                        <h3>TIPOS | {tipos !== undefined && tipos.map(t => <span> - {t} - </span>)}</h3>
                    </div>
                </div>
            }
        </div>
    )
}
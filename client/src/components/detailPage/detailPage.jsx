import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom'
import style from './detailPage.module.css'
import { colorType } from "../utils/colorType";
import { GETID } from "../../consultas";

export function DetailPage() {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState({})
    const [error, setError] = useState(false)

    useEffect(() => {
        axios.get(GETID + id).then(({data})=>{
            setPokemon(data)
            setError(false)
        }).catch(({response})=>{
            const {error} = response.data
            setError(error)
        })
        return setPokemon({})
    }, [id])

    const { name, vida, ataque, defensa, altura, peso, types, imagen, gif } = pokemon
    
    return (
        <div className={style.container}>
            {error ?
                <p>{error}</p>
                :
                <div className={style.divUno}>
                    <h3 className={style.id}>ID: {id}</h3>
                    <img src={gif === null || gif === undefined ? imagen : gif} className={style.imagen} alt="imagen de un pokemon" />
                    <div className={style.info}>
                        <h1>{name}</h1>
                        <h3>VIDA    |  {vida}</h3>
                        <h3>ATAQUE  |  {ataque}</h3>
                        <h3>DEFENSA |  {defensa}</h3>
                        {altura !== null && <h3>ALTURA  |  {altura}</h3>}
                        {peso !== null && <h3>PESO    |  {peso}</h3>}
                        <h3>TIPOS | {types !== undefined && types.map(t => <span style={{backgroundColor: colorType(t.name)}}> {t.name} </span>)}</h3>
                    </div>
                </div>

            }

        </div>
    )
}
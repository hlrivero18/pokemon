import React, { useEffect, useState } from "react";
import { CardPage } from "../cardPage/cardPage";
import style from './paginationPage.module.css'
import { useSelector } from "react-redux";

export function Pagination(props) {
    
    const {pokemones} = useSelector(state => state)
    const { elementosPorPagina, pokemon } = props;
    const [paginaActual, setPaginaActual] = useState(1);
    const paginasTotales = Math.ceil(pokemon.length / elementosPorPagina)

    const ultimoElemento = paginaActual * elementosPorPagina;
    const primerElemento = ultimoElemento - elementosPorPagina;
    const elementosActuales = pokemon.slice(primerElemento, ultimoElemento);

    const handlePage = (num) => {
        if(num > 0 && num <= paginasTotales) setPaginaActual(num)
        
    }

    const numerosDePagina = ()=>{
        let paginas = []
        for(let i = paginaActual; i <= Math.min(paginaActual + 4, paginasTotales); i++){
            paginas.push(
                <button className={i === paginaActual && style.buttonA} key={i} onClick={()=> handlePage(i)}>{i}</button>
            )
        }
        return paginas
    }

    useEffect(()=>{
        handlePage(1)
    }, [pokemones])

    return (
        <div>
            <div className={style.container}>
                {elementosActuales.map((pokemon, indice) => (
                    <CardPage key={indice} pokemon={pokemon} />
                ))}
            </div>

            <div className={style.buttons}>
                <button onClick={()=> handlePage(paginaActual - 1)}>{'<<prev'}</button>
                    {numerosDePagina()}
                <button onClick={()=> handlePage(paginaActual + 1)}>{'next>>'}</button>
            </div>
        </div>
    )
}
 {/* {Array.from({ length: paginasTotales }, (_, indice) => (
                    <button key={indice} onClick={() => handlePage(indice + 1)}>
                        {indice + 1}
                    </button>
                ))} */}
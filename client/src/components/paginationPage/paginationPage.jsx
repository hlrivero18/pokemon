import React, { useState } from "react";
import { CardPage } from "../cardPage/cardPage";
import style from './paginationPage.module.css'

export function Pagination(props) {
    const { elementosPorPagina, pokemones } = props;
    const [paginaActual, setPaginaActual] = useState(1);
    const paginasTotales = Math.ceil(pokemones.length / elementosPorPagina)

    const ultimoElemento = paginaActual * elementosPorPagina;
    const primerElemento = ultimoElemento - elementosPorPagina;
    const elementosActuales = pokemones.slice(primerElemento, ultimoElemento);

    const handlePage = (num) => {
        setPaginaActual(num)
    }

    return (
        <div>
            <div className={style.container}>
                {elementosActuales.map((pokemon, indice) => (
                    <CardPage key={indice} pokemon={pokemon} />
                ))}
            </div>

            <div className={style.buttons}>
                {Array.from({ length: paginasTotales }, (_, indice) => (
                    <button key={indice} onClick={() => handlePage(indice + 1)}>
                        {indice + 1}
                    </button>
                ))}
            </div>
        </div>
    )
}
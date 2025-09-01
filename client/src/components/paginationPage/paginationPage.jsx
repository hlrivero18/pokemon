import React, { useEffect, useState } from "react";
import { CardPage } from "../cardPage/cardPage";
import style from './paginationPage.module.css'
import { useSelector } from "react-redux";

export function Pagination(props) {

    const pokemones = useSelector(state => state.pokemones)
    const { elementosPorPagina } = props;
    const [paginaActual, setPaginaActual] = useState(1);
    const paginasTotales = Array.isArray(pokemones) ? Math.ceil(pokemones.length / elementosPorPagina) : 0;


    const ultimoElemento = paginaActual * elementosPorPagina;
    const primerElemento = ultimoElemento - elementosPorPagina;
    const elementosActuales = Array.isArray(pokemones) ? pokemones.slice(primerElemento, ultimoElemento) : [];

    const handlePage = (num) => {
        if (num > 0 && num <= paginasTotales) {
            setPaginaActual(num);
        }
    };

    const numerosDePagina = () => {
        const maxVisible = 5; // cantidad de botones visibles
        const bloque = Math.floor((paginaActual - 1) / maxVisible);
        const inicio = bloque * maxVisible + 1;
        const fin = Math.min(inicio + maxVisible - 1, paginasTotales);

        const pages = [];
        for (let i = inicio; i <= fin; i++) {
            pages.push(i);
        }

        return pages.map((page) => (
            <button
                key={page}
                onClick={() => handlePage(page)}
                className={`${style.button} ${page === paginaActual ? style.buttonA : ""}`}
            >
                {page}
            </button>
        ));
    };

    useEffect(() => {
        handlePage(1)
    }, [pokemones])

    return (
        <div>
            <div className={style.container}>
                {elementosActuales.map((pokemon) => (
                    <CardPage key={pokemon?.id} pokemon={pokemon} />
                ))}
            </div>

            <div className={style.buttons}>
                <button onClick={() => handlePage(paginaActual - 1)}>{'<<'}</button>
                {numerosDePagina()}
                <button onClick={() => handlePage(paginaActual + 1)}>{'>>'}</button>
            </div>
        </div>
    )
}
{/* {Array.from({ length: paginasTotales }, (_, indice) => (
                    <button key={indice} onClick={() => handlePage(indice + 1)}>
                        {indice + 1}
                    </button>
                ))} */}
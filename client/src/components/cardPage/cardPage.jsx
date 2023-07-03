import React from "react";
import style from './cardPage.module.css'
import { Link } from "react-router-dom";

export function CardPage({ pokemon }) {
    const { id, name, imagen, tipos } = pokemon

    return (
        <>
        {id &&    
        <Link className={style.link} to={`detail/${id}`}>
            <div className={style.container}>
                <img src={imagen} alt="imagen de un pokemon" />
                <div className={style.info}>
                    <h2>{name}</h2>
                    {tipos.map(t => <p>{t}</p>)}
                </div>
            </div>
        </Link>}
        </>

    )

}
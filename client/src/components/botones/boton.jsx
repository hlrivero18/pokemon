import React from "react";
import style from './boton.module.css'
import { Link } from "react-router-dom";


export function Boton(props){
    const {name, ruta} = props

    return(
        <div>
            <Link to={ruta}>
                <button className={style.boton}>{name}</button>
            </Link>
        </div>
    )
}
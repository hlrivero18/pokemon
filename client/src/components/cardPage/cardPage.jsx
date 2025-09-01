import React from "react";
import style from './cardPage.module.css'
import { Link } from "react-router-dom";
import { colorType } from "../utils/colorType";
import { esUUID } from "../utils/esUUId";
import { useDispatch } from "react-redux";
import { borrarPokemon, loading } from "../../redux/Actions/actions";


export function CardPage({ pokemon }) {
    const { id, name, imagen, types } = pokemon
    const dispatch = useDispatch()
    const handleClick = async () => {
        dispatch(loading(true))
        await dispatch(borrarPokemon(pokemon))
        dispatch(loading(false))
    }

    return (
        <>
            {id &&
                <div className={style.container}>
                    <Link className={style.linkuno} to={`/detail/${id}`}>
                        <img src={imagen} alt="imagen de un pokemon" />
                    </Link>
                    <div className={style.info}>
                        {esUUID(id) && <button onClick={handleClick}>x</button>}
                        <Link className={style.link} to={`/detail/${id}`}>
                            <h2>{name}</h2>
                            {types.map((t, i) => (<p key={i} style={{ backgroundColor: colorType(t.name) }}>{t.name}</p>))}
                        </Link>
                    </div>
                </div>
            }
        </>

    )

}
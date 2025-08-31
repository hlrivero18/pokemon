import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordernarPorTipo, filtroPorL, filtroPorA, orderForOrigin, loading } from "../../redux/Actions/actions";
import style from './filterOrder.module.css'

export function OrderFilter() {
    const tipos = useSelector(state => state.types)
    const dispatch = useDispatch()

    const handleChangeOrigin = (event)=>{
        const {value} = event.target;
        dispatch(orderForOrigin(value))
    }

    const handleOrder = (event) => {
        const {value} = event.target;
        dispatch(ordernarPorTipo(value))
    }
    const handleFilter = (event)=>{
        const {value} = event.target;
        dispatch(filtroPorL(value))
    }
    const handlerFilterAtaque = (event)=> {
        const {value} = event.target;
        dispatch(filtroPorA(value)) 
    }

    return (
        <div className={style.container}>
            <select name="origen" id="10100" onChange={handleChangeOrigin}>
                <option value="ALL">-Pokemones-</option>
                <option value="DB">Mis pokemones</option>
                <option value="API">Pokemones de la App</option>
                <option value="ALL">Todos los pokemones</option>
            </select>
            <select name="tipos" id="10101" onChange={handleOrder}>
                <option value="">-Tipo-</option>
                {tipos !== undefined && tipos.map((t, i) => <option key={i} value={t.name}>{t.name}</option>)}
            </select>
            <select name="orderAlfa" id="10102" onChange={handleFilter}>
                <option value="">-A-Z-</option>
                <option value="AA">Ascendente</option>
                <option value="DA">Descendente</option>
            </select>
            <select name="orderAta" id="10103" onChange={handlerFilterAtaque}>
                <option value="">-Ataque-</option>
                <option value="AA">Ascendente</option>
                <option value="DA">Descendente</option>
            </select>
        </div>
    )
}
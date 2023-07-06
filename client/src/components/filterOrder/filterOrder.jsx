import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { agregarPokemon } from "../../redux/Actions/actions";

export function OrderFilter() {
    const [tipos, setTipos] = useState(null)

    const dispatch = useDispatch()

    const types = async () => {
        const { data } = await axios.get('http://localhost:3001/pokemons/types')
        setTipos(data)
    }
    const datos = async (propiedad) => {
        const { data } = await axios.get('http://localhost:3001/pokemons');
        dispatch(agregarPokemon(data[propiedad]))
    }

    const handleChange = (event) => {
        const { value } = event.target
        datos(value)
    }

    useEffect(() => {
        types()
    }, [])
    return (
        <div>
            <select name="origen" id="10100" onChange={handleChange}>
                <option value="ALL">-Pokemones-</option>
                <option value="DB">Mis pokemones</option>
                <option value="API">Pokemones de la App</option>
                <option value="ALL">Todos los pokemones</option>
            </select>
            <select name="tipos" id="10101">
                <option value="">-Tipo-</option>
                {tipos !== null && tipos.map(t => <option value={t.name}>{t.name}</option>)}
            </select>
            <select name="orderAlfa" id="10102">
                <option value="">-A-Z-</option>
                <option value="AA">Ascendente</option>
                <option value="DA">Descendente</option>
            </select>
            <select name="orderAta" id="10103">
                <option value="">-Ataque-</option>
                <option value="AA">Ascendente</option>
                <option value="DA">Descendente</option>
            </select>
        </div>
    )
}
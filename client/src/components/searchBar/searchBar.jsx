import React, { useState } from "react";
import style from './searchBar.module.css'
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { agregarNombre } from "../../redux/Actions/actions";

export function SearchBar() {
    const [name, setName] = useState('')
    const dispacth = useDispatch()
    const busqueda = async()=>{
        const {data} = await axios.get(`http://localhost:3001/pokemons/?name=${name}`)
        dispacth(agregarNombre(data))
    }

    const handleChange = (e) => {
        const { value } = e.target
        setName(value)
    }

    return (
        <div className={style.container}>
            <div className={style.input}>
                <input
                    type="search"
                    placeholder="Escribe el nombre de tu pokemon..."
                    value={name}
                    onChange={handleChange}
                />
                <button onClick={busqueda}>Buscar</button>
            </div>

        </div>
    )
}
import React, { useEffect, useState } from "react";
import style from './searchBar.module.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function SearchBar() {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [pokemon, setPokemon] = useState(null)

    const handleChange = (e) => {
        const { value } = e.target
        setName(value)
    }

    const busqueda = async () => {
        try {
            const { data } = await axios.get(`http://localhost:3001/pokemons/?name=${name}`)
            setPokemon(data)
        } catch (error) {
             console.log(error)
        }

    }

    useEffect(() => {
     try {
        if (pokemon) {
            navigate(`/detail/${pokemon.id}`);
        }
     } catch (error) {
        console.log('error')
     }
    },[pokemon])


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
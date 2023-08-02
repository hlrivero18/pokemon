import React, { useState } from "react";
import style from './searchBar.module.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loading, pokemonsSearch } from "../../redux/Actions/actions";

export function SearchBar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    const handleChange = (e) => {
        const { value } = e.target
        setName(value)
    }

    const datos = async () => {

        axios.get(`http://localhost:3001/pokemons/?name=${name}`)
            .then((response) => {
                const { data } = response;
                dispatch(pokemonsSearch(data))
                dispatch(loading(false))
               
            })
            .catch((error) => { console.log(error.message) })
    }

    const handleClick = () => {
        if (name.length !== 0) {
            navigate('/home')
            dispatch(loading(true))
            datos()
            setName('')
        }

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
                <button onClick={handleClick}>Buscar</button>
            </div>

        </div>
    )
}
import React, { useEffect, useState } from "react";
import axios from "axios";
import style from './formPage.module.css'
import validation from "../utils/validation";
import validationType from "../utils/validationType";
import { resetState } from "../../redux/Actions/actions";
import { useDispatch } from "react-redux";

export function FormPage() {

    const [inputs, setInputs] = useState({
        name: '',
        vida: '',
        ataque: '',
        defensa: '',
        altura: '',
        peso: '',
        types: [],
    })
    const { name, imagen, vida, defensa, ataque, altura, peso, types } = inputs

    const [tipos, setTipos] = useState(undefined)
    const [error, setError] = useState({})
    const [errorType, setErrorType] = useState({})

    const datos = async () => {
        const { data } = await axios.get('http://localhost:3001/pokemons/types')
        setTipos(data)
    }

    const posteo = async () => {
        try {
            const response = await axios.post('http://localhost:3001/pokemons', inputs)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const dispatch = useDispatch()

    useEffect(() => {
        datos()
        setErrorType(validationType(types))
    }, [types])



    const handleChange = (e) => {
        const { value, name } = e.target;
        const newPokemon = { ...inputs, [name]: value }
        setInputs(newPokemon)
        setError(validation(newPokemon))
    }
    const handleChangeType = (e) => {
        const { checked, value } = e.target;
        const newTypes = [...inputs.types, value]
        
        checked ? 
            setInputs({ ...inputs, types: newTypes})
            :
            setInputs({ ...inputs, types: newTypes.filter(t => t !== value)})
    }

    const handleClick = (e) => {
        e.preventDefault();
        if (Object.keys(error).length === 0 && Object.keys(errorType).length === 0) {
            console.log('ya postie')
            posteo()
            dispatch(resetState())
        }
    }

    return (
        <div className={style.container}>
            <form className={style.form} onSubmit={handleClick}>
                <label className={style.label}>Nombre</label>
                <input type="text" name="name"
                    placeholder="nombre de tu pokemon..." key='1'
                    value={name} onChange={handleChange} />
                <p className={style.errorType}>{error.name}</p>

                <label className={style.label}>Imagen</label>
                <input type="text" name="imagen"
                    placeholder="imagen de tu pokemon" key='2'
                    value={imagen} onChange={handleChange} />
                    <p className={style.errorType}>{error.imagen}</p>
                <div className={style.input}>
                    <div>
                        <label htmlFor="">Vida</label>
                        <input type="number" name="vida"
                            placeholder="vida de tu pokemon..." key='3'
                            value={vida} onChange={handleChange} />
                            <p className={style.errorType}>{error.vida}</p>
                    </div>
                    <div>
                        <label htmlFor="">Ataque</label>
                        <input type="number" name="ataque"
                            placeholder="ataque de tu pokemon..." key='4'
                            value={ataque} onChange={handleChange} />
                            <p className={style.errorType}>{error.ataque}</p>
                    </div>
                </div>
                <div className={style.input}>
                    <div>
                        <label htmlFor="">Defensa</label>
                        <input type="number" name="defensa"
                            placeholder="defensa de tu pokemon..." key='5'
                            value={defensa} onChange={handleChange} />
                            <p className={style.errorType}>{error.defensa}</p>
                    </div>
                    <div>
                        <label htmlFor="">Altura</label>
                        <input type="number" name="altura"
                            placeholder="altura de tu pokemon..." key='6'
                            value={altura} onChange={handleChange} />
                    </div>
                </div>
                <div className={style.peso}>
                    <label htmlFor="">Peso</label>
                    <input type="number" name="peso"
                        placeholder="peso de tu pokemon..." key='7'
                        value={peso} onChange={handleChange} />
                </div>
                <div className={style.types}>
                    {tipos !== undefined &&
                        tipos.map((t, i) => <label>
                            <input type="checkbox" name={t.name} value={t.id} key={i} onChange={handleChangeType} /> {t.name}
                        </label>)}
                </div>
                <p className={style.errorType}>{errorType.types}</p>
                <button type="submit">Crear pokemon!</button>
            </form>
        </div>
    )
}

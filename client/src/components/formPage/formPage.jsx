import React, { useEffect, useState } from "react";
import axios from "axios";
import style from './formPage.module.css'

export function FormPage() {
    const [inputs, setInputs] = useState({
        name: '',
        vida: '',
        ataque: '',
        defensa: '',
        altura: '',
        peso: '',
        tipos: [],
    })
    const { name, imagen, vida, defensa, ataque, altura, peso } = inputs

    const [tipos, setTipos] = useState(undefined)

    const datos = async () => {
        const { data } = await axios.get('http://localhost:3001/pokemons/types')
        setTipos(data)
    }

    const posteo = async () => {
        try {
            const response = await axios.post('http://localhost:3001/pokemons', inputs)
            console.log(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        datos()
    }, [])



    const handleChange = (e) => {
        const { value, name } = e.target;
        const newPokemon = { ...inputs, [name]: value }
        setInputs(newPokemon)
    }
    const handleChangeType = (e) => {
        const { checked, value } = e.target;
        checked ? setInputs({ ...inputs, tipos: [...inputs.tipos, value] })
            :
            setInputs({ ...inputs, tipos: inputs.tipos.filter(t => t !== value) })
    }

    const handleClick = (e) => {
        e.preventDefault();
        posteo()
    }

    return (
        <div className={style.container}>
            <form className={style.form} onSubmit={handleClick}>
                <label htmlFor="">Nombre</label>
                <input type="text" name="name"
                    placeholder="nombre de tu pokemon..." key='1'
                    value={name} onChange={handleChange} />

                <label htmlFor="">Imagen</label>
                <input type="text" name="imagen"
                    placeholder="imagen de tu pokemon" key='2'
                    value={imagen} onChange={handleChange} />
                <div>
                    <label htmlFor="">Vida</label>
                    <input type="number" name="vida"
                        placeholder="vida de tu pokemon..." key='3'
                        value={vida} onChange={handleChange} />

                    <label htmlFor="">Ataque</label>
                    <input type="number" name="ataque"
                        placeholder="ataque de tu pokemon..." key='4'
                        value={ataque} onChange={handleChange} />

                </div>
                <div>
                    <label htmlFor="">Defensa</label>
                <input type="number" name="defensa"
                    placeholder="defensa de tu pokemon..." key='5'
                    value={defensa} onChange={handleChange} />

                <label htmlFor="">Altura</label>
                <input type="number" name="altura"
                    placeholder="altura de tu pokemon..." key='6'
                    value={altura} onChange={handleChange} /> 
                </div>
                <div>
                  <label htmlFor="">Peso</label>
                <input type="number" name="peso"
                    placeholder="peso de tu pokemon..." key='7'
                    value={peso} onChange={handleChange} />  
                </div>
                <div>
                   {tipos !== undefined &&
                    tipos.map(t => <label>
                        <input type="checkbox" name={t.name} value={t.id} key={t.id} onChange={handleChangeType} /> {t.name}
                    </label>)} 
                </div>
            
                <button type="submit">Crear pokemon!</button>
            </form>
        </div>
    )
}

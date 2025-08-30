import React, { useEffect, useState } from "react";
import axios from "axios";
import style from './formPage.module.css'
import validation from "../../components/utils/validation";
import validationType from "../../components/utils/validationType";
import { loading, resetState } from "../../redux/Actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { POST } from "../../consultas";
import UploadImage from "./uploadImage";

export function CrearPokemonPage() {
    const navigate = useNavigate()
    const tipos = useSelector(state=> state.types)
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

    const [error, setError] = useState({})
    const [errorType, setErrorType] = useState({})

    

    const posteo = async () => {
        try {
            const response = await axios.post(POST, inputs)
            console.log(response.data)
        } catch (error) {
            window.alert(error)
        }
    }

    const dispatch = useDispatch()

    useEffect(() => {
        setErrorType(validationType(types))
    }, [types])



    const handleChange = (e) => {
        const { value, name } = e.target;
        const newPokemon = { ...inputs, [name]: value }
        setInputs(newPokemon)
        setError(validation(newPokemon))
    }
    const handleImageUpload = (secure_url) => {
        const newPokemon = { ...inputs, imagen: secure_url };
        setInputs(newPokemon);
        setError(validation(newPokemon))
    };
    const handleChangeType = (e) => {
        const { checked, value } = e.target;
        const newTypes = [...inputs.types, value]

        checked ?
            setInputs({ ...inputs, types: newTypes })
            :
            setInputs({ ...inputs, types: newTypes.filter(t => t !== value) })
    }

    const handleClick = async (e) => {
        e.preventDefault();
        if (Object.keys(error).length === 0 && Object.keys(errorType).length === 0) {
            dispatch(loading(true))
            navigate('/home')
            await posteo()
            dispatch(resetState())
        }
    }

    return (
        <div className={style.container}>
            <form className={style.form} onSubmit={handleClick}>
                <div className={style.campo}>
                    <label className={style.label}>Nombre*</label>
                    <input type="text" name="name"
                        placeholder="nombre de tu pokemon..." key='1'
                        value={name} onChange={handleChange} />
                    <p className={style.errorType}>{error.name}</p>
                </div>
                <div className={style.campo}>
                    <label className={style.label}>Imagen*</label>
                    {/* <input type="text" name="imagen"
                        placeholder="imagen de tu pokemon" key='2'
                        value={imagen} onChange={handleChange} /> */}
                        <UploadImage handleImageUpload={handleImageUpload}/>
                        {/* <input type="file" name="imagen"
                        key='2' value={imagen} onChange={handleChange}/> */}
                    <p className={style.errorType}>{error.imagen}</p>
                </div>
                <div className={style.campo}>
                    <label htmlFor="">Vida*</label>
                    <input type="number" name="vida"
                        placeholder="vida de tu pokemon..." key='3'
                        value={vida} onChange={handleChange} />
                    <p className={style.errorType}>{error.vida}</p>
                </div>
                <div className={style.campo}>
                    <label htmlFor="">Ataque*</label>
                    <input type="number" name="ataque"
                        placeholder="ataque de tu pokemon..." key='4'
                        value={ataque} onChange={handleChange} />
                    <p className={style.errorType}>{error.ataque}</p>
                </div>
                <div className={style.campo}>
                    <label htmlFor="">Defensa*</label>
                    <input type="number" name="defensa"
                        placeholder="defensa de tu pokemon..." key='5'
                        value={defensa} onChange={handleChange} />
                    <p className={style.errorType}>{error.defensa}</p>
                </div>
                <div className={style.input}>
                    <div className={style.campo}>
                        <label htmlFor="">Altura</label>
                        <input type="number" name="altura"
                            placeholder="altura de tu pokemon..." key='6'
                            value={altura} onChange={handleChange} />
                    </div>
                    <div className={style.campo}>
                        <label htmlFor="">Peso</label>
                        <input type="number" name="peso"
                            placeholder="peso de tu pokemon..." key='7'
                            value={peso} onChange={handleChange} />
                    </div>
                </div>

                <div className={style.containerType}>
                    <div className={style.types}>
                        {tipos !== undefined &&
                            tipos.map((t, i) => <label>
                                <input type="checkbox" name={t.name} value={t.id} key={i} onChange={handleChangeType} /> {t.name}
                            </label>)}
                    </div>

                    <p className={style.errorType}>{errorType.types}</p>

                </div>
                <button type="submit">Crear pokemon!</button>
            </form>
        </div>
    )
}

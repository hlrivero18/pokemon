import React, { useEffect, useState } from "react";
import style from './homePage.module.css'
import { useDispatch, useSelector } from "react-redux";
import { agregarPokemon, agregarTipos, loading} from "../../redux/Actions/actions";
import { OrderFilter } from "../../components/filterOrder/filterOrder";
import { Pagination } from "../../components/paginationPage/paginationPage";

export function HomePage() {

    const { pokemones } = useSelector(state => state)
    const { isLoading } = useSelector(state => state)
    const [itemsPorPagina, setItemsPorPagina] = useState(6)
    const dispatch = useDispatch()

    const handleResize = () => {
        const width = window.innerWidth;
        if (width < 600) {
            setItemsPorPagina(5);
        } else if (width < 1024) {
            setItemsPorPagina(12);
        } else {
            setItemsPorPagina(15);
        }
    };

    useEffect(() => {
        handleResize()
        dispatch(loading(true))
        dispatch(agregarTipos())
        dispatch(agregarPokemon())
    }, [dispatch])
 

    return (
        <div className={style.containerAll}>
            <OrderFilter />
            <div className={style.container}>
                {isLoading ? (
                    <p className={style.loading}>...Cargando</p>
                    ) : (
                    pokemones?.error ? (
                        <p className={style.loading}>{"Tuvimos un problema :( vuelve a intentarlo"}</p>
                    ) : (
                        pokemones.length == 0 ? 
                        (<p className={style.loading}>{"No hay pokemones para mostrar"}</p>)
                        :
                        (<Pagination elementosPorPagina={itemsPorPagina} />)
                    )
                )}

            </div>

        </div>
    )
}
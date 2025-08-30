import React from "react";
import { Link } from 'react-router-dom'
import style from './landingPage.module.css'

export function LandingPage() {
    return (
        <div className={style.container}>
            <div className={style.image}>
            </div>
            <div className={style.start}>
                <div>
                    <h1>{'Bienvenido :)'}</h1>
                    <Link to={'/home'}>
                        <button>Inicio</button>
                    </Link>
                </div>
                <h5>App created by Hector Luis Rivero</h5>
            </div>
        </div>
    )
}
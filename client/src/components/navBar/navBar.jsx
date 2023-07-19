import React from "react";
import style from './navBar.module.css'
import logo from '../../image/logo.png'
import { SearchBar } from "../searchBar/searchBar";
import { Boton } from "../botones/boton";

export function NavBar(){
    return (
        <div className={style.container}>
            <img src={logo} alt="" />
            <SearchBar/>
            <Boton name='Home' ruta='/home'/>
            <Boton name='Crea un Pokemon' ruta='/create'/>
        </div>
    )
}
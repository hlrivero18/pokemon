import React from "react";
import style from './navBar.module.css'
import logo from '../../image/logo.png'
import { SearchBar } from "../searchBar/searchBar";
import { Boton } from "../botones/boton";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { MdAccountCircle } from "react-icons/md";

export function NavBar() {
    return (
        <div className={style.container}>
            <Link to={'/home'}>
                <img src={logo} alt="" />
            </Link>
            <SearchBar />

            <div className={style.btn}>
                <Link to={'/create'}>
                    <button className={style.boton}>Crear un pokemon</button>
                </Link>
            </div>
            <div className={style.btn}>
                <button className={style.boton}>
                    <a className={style.a} href="https://web-portafolio-hlrivero18.vercel.app/">Acerca de mí</a>
                </button>
            </div>
            <div className={style.btnMobile}>
                <Link to={'/create'}>
                    <button className={style.boton}><BiEdit /></button>
                </Link>
            </div>
            <div className={style.btnProfile}>
                <a className={style.a} href="https://web-portafolio-hlrivero18.vercel.app/"><MdAccountCircle /></a>
            </div>
        </div>
    )
}
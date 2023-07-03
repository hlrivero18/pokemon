import React from "react";
import style from './navBar.module.css'

import { SearchBar } from "../searchBar/searchBar";

export function NavBar(){
    return (
        <div className={style.container}>
            <SearchBar/>
        </div>
    )
}
import React from "react";
import s from './Header.module.scss'
import NavBar from "../NavBar/NavBar";
import BurgerNavBar from "../BurgerNavBar/BurgerNavBar";

function Header() {
    return (
        <div className={s.header}>
            <NavBar />
            <BurgerNavBar/>
        </div>
    );
}

export default Header;
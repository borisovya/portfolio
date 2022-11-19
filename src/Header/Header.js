import React from "react";
import s from './Header.module.scss'
import NavBar from "../NavBar/NavBar";

function Header() {
    return (
        <div className={s.header}>
            <NavBar />
        </div>
    );
}

export default Header;
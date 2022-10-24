import React from "react";
import s from './NavBar.module.scss'

function NavBar() {
    return (
        <div className={s.navBar}>
            <a href="">Main</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="">Contacts</a>
        </div>
    );
}

export default NavBar;
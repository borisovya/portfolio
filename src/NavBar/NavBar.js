import React from "react";
import s from './NavBar.module.scss'
import { Link } from 'react-scroll'


function NavBar() {



    return (
        <div className={s.navBar}>
            <Link
                className={s.link}
                activeClass={s.active}
                to="main"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}>
                Main
            </Link>
            <Link
                className={s.link}
                activeClass={s.active}
                to="skills"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}>
                Skills
            </Link>
            <Link
                activeClass={s.active}
                to="projects"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}>
                Projects
            </Link>
            <Link
                activeClass={s.active}
                to="contacts"
                spy={true}
                smooth={true}
                offset={-170}
                duration={500}>
                Contacts
            </Link>
        </div>
    );
}

export default NavBar;
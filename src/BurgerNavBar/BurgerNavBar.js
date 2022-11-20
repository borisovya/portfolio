import React, {useState} from "react";
import s from './BurgerNavBar.module.scss'
import {Link} from 'react-scroll'


function BurgerNavBar() {
    let [menuIsOpened, setMenuIsOpened] = useState(false)
    const onBurgerBtnClick = () => {
        setMenuIsOpened(!menuIsOpened)
    }
    return (
        <div className={s.burgerNavBar}>
            <div className={menuIsOpened
                ? `${s.burgerNavBarItems} ${s.show}`
                : s.burgerNavBarItems }>
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
            <div className={s.burgerBtn} onClick={onBurgerBtnClick}> </div>
        </div>
    );
}

export default BurgerNavBar;
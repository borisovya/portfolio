import React from "react";
import s from './Footer.module.scss'
import styleContainer from "../Common/Styles/Container.module.css";


function Footer() {
    return (
        <div className={s.footer}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <h3>Vladimir Borisov</h3>
                <div className={s.footerBlock}>
                    <div className={s.footerBlockContent}></div>
                    <div className={s.footerBlockContent}></div>
                    <div className={s.footerBlockContent}></div>
                    <div className={s.footerBlockContent}></div>
                </div>
                <h3>All rights reserved</h3>
            </div>
        </div>
    );
}

export default Footer;
import React from "react";
import s from './Footer.module.scss'
import styleContainer from "../Common/Styles/Container.module.scss";
import telegramSvg from "../assets/images/Telegram_logo.svg";
import gitSvg from "../assets/images/git-icon.svg";
import facebookSvg from "../assets/images/Facebook_F_icon.svg";
import linkedInSvg from "../assets/images/LinkedIn_icon.svg";


const telegram = {
    backgroundImage: `url(${telegramSvg})`
}

const git = {
    backgroundImage: `url(${gitSvg})`
}

const facebook = {
    backgroundImage: `url(${facebookSvg})`
}

const linkedIn = {
    backgroundImage: `url(${linkedInSvg})`
}

function Footer() {
    return (
        <div className={s.footer}>
            <div className={`${styleContainer.container} ${s.footerContainer}`}>
                <h3>Vladimir Borisov</h3>
                <div className={s.footerBlock}>
                    <a href='https://t.me/borisovlife'><div style={telegram} className={s.footerBlockContent}></div>
                    </a>
                    <a href='https://www.facebook.com/Vladimir.a.borisov'>
                        <div style={facebook} className={s.footerBlockContent}></div>
                    </a>
                    <a href='https://www.linkedin.com/in/vladimir-borisov-b63020b7/'>
                        <div style={linkedIn} className={s.footerBlockContent}></div>
                    </a>
                    <a href='https://github.com/borisovya'>
                        <div style={git} className={s.footerBlockContent}></div>
                    </a>

                </div>
                <h3>All rights reserved</h3>
            </div>
        </div>
    );
}

export default Footer;
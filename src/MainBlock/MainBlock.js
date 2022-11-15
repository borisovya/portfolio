import React from "react";
import s from './MainBlock.module.scss'
import styleContainer from '../Common/Styles/Container.module.css'
import picImg from "../assets/images/photo_2022-10-22_19-48-16.jpg";


function MainBlock() {

    const pic = {
        backgroundImage: `url(${picImg})`,
    };

    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
                <h1 className={s.greeting}>
                    <div className={s.welcome}>Welcome to my page</div>
                    <div className={s.profession}>{`Hi, I'm `}
                        <span className={s.name}>Vladimir Borisov</span>
                    </div>

                    <div className={s.profession}>a Front-end developer</div>
                </h1>
                <div className={s.photoContainer}>
                    <div style={pic} className={s.photo}></div>
                </div>

            </div>
        </div>
    );
}

export default MainBlock;
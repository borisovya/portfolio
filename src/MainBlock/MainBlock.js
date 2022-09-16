import React from "react";
import s from './MainBlock.module.css'
import styleContainer from '../Common/Styles/Container.module.css'


function MainBlock() {
    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
                <div className={s.greeting}>
                    <span>Hi there</span>
                    <h1>Vladimir Borisov</h1>
                    <p>Front-end developer</p>
                </div>

                <div className={s.photo}></div>
            </div>
        </div>
    );
}

export default MainBlock;
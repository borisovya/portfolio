import React from "react";
import s from './MainBlock.module.scss'
import styleContainer from '../Common/Styles/Container.module.scss'
import picImg from "../assets/images/photo_2022-10-22_19-48-16.jpg";
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'


function MainBlock() {

    const pic = {
        backgroundImage: `url(${picImg})`,
    };


    return (
        <div id='main' className={s.mainBlock}>
            <Fade bottom>
                <div className={styleContainer.container}>
                    <h1 className={s.greeting}>
                        <div className={s.welcome}>Welcome to my page</div>
                        <div className={s.profession}>{`Hi, I'm `}
                            <span className={s.name}>Vladimir Borisov</span>
                        </div>

                        <div className={s.profession}><ReactTypingEffect
                            text={["a Frontend developer"]}
                            speed='70'
                            eraseSpeed='100'
                        /></div>
                    </h1>
                    <Tilt className="Tilt" options={{ max : 25 }} >
                        <div className={s.photoContainer}>
                            <div style={pic} className={s.photo}></div>
                        </div>
                    </Tilt>
                </div>
            </Fade>
        </div>
    );
}

export default MainBlock;
import React from "react";
import s from './RemoteWork.module.scss'
import styleContainer from "../Common/Styles/Container.module.scss";


function RemoteWork() {


    return (
        <div className={s.remoteWorkBlock}>
            <div className={`${styleContainer.container} ${s.remoteBlockContainer}`}>

                    <h3>I am available for Freelance</h3>
                    <div><button className={s.button}>Hire me</button></div>

            </div>
        </div>
    );
}

export default RemoteWork;
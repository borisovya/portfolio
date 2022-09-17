import React from "react";
import s from './RemoteWork.module.css'
import styleContainer from "../Common/Styles/Container.module.css";


function RemoteWork() {
    return (
        <div className={s.remoteWorkBlock}>
            <div className={`${styleContainer.container} ${s.remoteBlockContainer}`}>
                <div className={s.remoteBlock}>
                    <h3>Рассматриваю варианты удаленной работы.</h3>
                    <div><button>Нанять меня</button></div>
                </div>
            </div>
        </div>
    );
}

export default RemoteWork;
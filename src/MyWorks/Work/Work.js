import React from "react";
import s from './Work.module.css'


function Work(props) {
    return (
        <div className={s.work}>
            <div className={s.blockWithButton}>
                <div className={s.pic}></div>
                <button>Watch</button>
            </div>
            <div className={s.descriptionBlock}>
                <h3 className={s.title}>{props.title}</h3>
                <div className={s.description}>{props.description}</div>
            </div>
        </div>
    );
}

export default Work;
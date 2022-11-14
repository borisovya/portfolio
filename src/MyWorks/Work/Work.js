import React from "react";
import s from './Work.module.scss'


function Work(props) {
    return (
        <div className={s.workContainer}>
            <div className={s.imgContainer} style={props.style}>
                <a href='https://github.com/borisovya' className={s.moreDetailsBlock}> See more </a>
            </div>
            <div className={s.descriptionBlock}>
                <h3 className={s.title}>{props.title}</h3>
                <div className={s.description}>{props.description}</div>

            </div>

        </div>
    );
}

export default Work;
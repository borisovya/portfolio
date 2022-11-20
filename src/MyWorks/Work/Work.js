import React from "react";
import s from './Work.module.scss'
import Button from "../../Common/Components/Button/Button";


function Work(props) {
    return (
        <div className={s.workContainer}>
            <div className={s.imgContainer} style={props.style}>
                <Button className={s.moreDetailsBlock} text={'See more'} link={props.link}/>
            </div>
            <div className={s.descriptionBlock}>
                <h3 className={s.title}>{props.title}</h3>
                <div className={s.description}>{props.description}</div>

            </div>

        </div>
    );
}

export default Work;
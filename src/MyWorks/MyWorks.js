import React from "react";
import s from './MyWorks.module.css'
import styleContainer from "../Common/Styles/Container.module.css";
import Work from "./Work/Work";

function MyWorks() {
    return (
        <div className={s.myWorksBlock}>
            <div className={`${styleContainer.container} ${s.worksContainer}`}>

                <h2 className={s.title}>My works:</h2>
                <div className={s.works}>
                    <Work title={'ToDo List'} description={'An interesting description is going to be here...'}/>
                    <Work title={'Some simple components'} description={'An interesting description is going to be here... Please wait a bit.'}/>
                    <Work title={'Some simple components'} description={'An interesting description is going to be here... Please wait a bit.'}/>
                    <Work title={'Some simple components'} description={'An interesting description is going to be here... Please wait a bit.'}/>
                </div>
            </div>
        </div>
    );
}

export default MyWorks;
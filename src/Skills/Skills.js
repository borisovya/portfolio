import React from "react";
import s from './Skills.module.css'
import styleContainer from '../Common/Styles/Container.module.css'
import Skill from "./Skill/Skill";
import Title from "../Common/Components/Title/Title";


function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title text={'Skills'}/>
                <div className={s.skills}>
                    <Skill title={'JS'} description={'Some information regarding JS skills...'} />
                    <Skill title={'HTML' } description={'Some information regarding HTML skills...'} />
                    <Skill title={'TypeScript'} description={'Some information regarding CSS skills...'} />
                    <Skill title={'React-Redux'} description={'Some information regarding CSS skills...'} />
                    <Skill title={'CSS'} description={'Some information regarding CSS skills...'} />
                </div>
            </div>
        </div>
    );
}

export default Skills;
import React from "react";
import s from './Skills.module.css'
import styleContainer from '../Common/Styles/Container.module.scss'
import Skill from "./Skill/Skill";
import Title from "../Common/Components/Title/Title";
import jsSvg from "../assets/images/js.svg";
import htmlSvg from "../assets/images/HTML5_logo_and_wordmark.svg";
import typeScriptSvg from "../assets/images/Typescript_logo_2020.svg";
import reactReduxSvg from "../assets/images/redux-icon.svg";
import reactSvg from "../assets/images/React-icon.svg";
import cssSvg from "../assets/images/css-icon.svg";


const jsStyle = {
    backgroundImage: `url(${jsSvg})`
}

const htmlStyle = {
    backgroundImage: `url(${htmlSvg})`
}

const cssStyle = {
    backgroundImage: `url(${cssSvg})`
}

const typeScriptStyle = {
    backgroundImage: `url(${typeScriptSvg})`
}

const reactReduxStyle = {
    backgroundImage: `url(${reactReduxSvg})`
}

const reactStyle = {
    backgroundImage: `url(${reactSvg})`
}

function Skills() {
    return (
        <div id='skills' className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title text={'Skills'}/>
                <div className={s.skills}>
                    <Skill iconStyle={jsStyle} title={'JS'} description={''} />
                    <Skill iconStyle={htmlStyle} title={'HTML' } description={''} />
                    <Skill iconStyle={cssStyle} title={'CSS'} description={''} />
                    <Skill iconStyle={reactStyle} title={'React'} description={''} />
                    <Skill iconStyle={reactReduxStyle} title={'React-Redux'} description={''} />
                    <Skill iconStyle={typeScriptStyle} title={'TypeScript'} description={''} />
                </div>
            </div>
        </div>
    );
}

export default Skills;
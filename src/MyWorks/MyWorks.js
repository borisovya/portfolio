import React from "react";
import s from './MyWorks.module.scss'
import styleContainer from "../Common/Styles/Container.module.css";
import Work from "./Work/Work";
import Title from "../Common/Components/Title/Title";
import toDoImg from '../assets/images/todo2.jpg'
import socialNetworkImg from '../assets/images/social2.png'
import simpleComponentsImg from '../assets/images/js2.png'

function MyWorks() {

    const todoList = {
        color: 'blue',
        backgroundImage: `url(${toDoImg})`,
    };

    const socialNetwork = {
        color: 'blue',
        backgroundImage: `url(${socialNetworkImg})`,
    };

    const simpleComponents = {
        color: 'blue',
        backgroundImage: `url(${simpleComponentsImg})`,
    };

    return (
        <div className={s.myWorksBlock}>

            <div className={`${styleContainer.container} ${s.worksContainer}`}>
                <Title text={'Projects'}/>
                <div className={s.works}>

                    <Work style={todoList}
                          title={'ToDo List'}
                          description={'An interesting description is going to be here..................................An interesting description is going to be here.............................................................'}/>
                    <Work style={socialNetwork}
                          title={'Social network'}
                          description={'An interesting description is going to be here... Please wait a bit.'}/>
                    <Work style={simpleComponents}
                          title={'Some simple components'}
                          description={'An interesting description is going to be here... Please wait a bit.'}/>

                </div>
            </div>
        </div>
    );
}

export default MyWorks;
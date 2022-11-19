import React from "react";
import s from './MyWorks.module.scss'
import styleContainer from "../Common/Styles/Container.module.scss";
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
        <div id='projects' className={s.myWorksBlock}>

            <div className={`${styleContainer.container} ${s.worksContainer}`}>
                <Title text={'Projects'}/>
                <div className={s.works}>

                    <Work style={todoList}
                          title={'ToDo List'}
                          description={'This app can help you with your daily routine.'}/>
                    <Work style={socialNetwork}
                          title={'Social network'}
                          description={'Punch social network. This is a social network example.'}/>
                    <Work style={simpleComponents}
                          title={'Cards'}
                          description={'Here you can learn something using cards.'}/>

                </div>
            </div>
        </div>
    );
}

export default MyWorks;
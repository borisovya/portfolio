import React from 'react';
import s from './Button.module.scss'

const Button = (props) => {
    return (
        <a href='' className={s.btn}>{props.text}</a>
    );
};

export default Button;
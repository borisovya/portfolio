import React from "react";
import s from './Contacts.module.scss'
import styleContainer from "../Common/Styles/Container.module.scss";
import {useForm} from "react-hook-form";
import TextField from "@mui/material/TextField";
import {styled} from '@mui/material/styles'
import Title from "../Common/Components/Title/Title";
import Fade from 'react-reveal/Slide';
import * as emailjs from "@emailjs/browser";



function Contacts() {
    return (
        <div className={s.contacts}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`}>
                <Title text={'Contact Me'}/>
                <ContactForm/>
            </div>
        </div>
    );
}

export default Contacts;

const CustomTextField = styled(TextField)({
    '& label': {
        color: '#c4cfde',
    },
    '& label.Mui-focused': {
        color: '#f9004d',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#f9004d',
    },
});

const ContactForm = () => {
    const {register, handleSubmit, reset} = useForm();

    const onSubmit = (data) => {
        console.log(data)
        const templateParams = {
            contact_number: data.number,
            from_name: data.email,
            message: data.message
        };
        emailjs.send('contact_form', 'template_nw74xye', templateParams, 'eKYeukvQGOWd98rgJ')
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                console.log('FAILED...', error);
            });
        reset()
    }


    return (
        <Fade bottom>
            <form id='contacts' className={s.form} onSubmit={handleSubmit(onSubmit)}>

                <CustomTextField className={s.textField} label="Email" variant="standard" {...register("email")} />
                <CustomTextField className={s.textField} label="Number" variant="standard" {...register("number")} />
                <CustomTextField className={s.textField}
                                 label="Your message"
                                 multiline
                                 rows={4}
                                 variant="standard"
                                 {...register("message")} />
                <input className={s.button} type="submit" value={'Send message'}/>
            </form>
        </Fade>
    );
}
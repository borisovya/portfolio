import React from "react";
import s from './Contacts.module.scss'
import styleContainer from "../Common/Styles/Container.module.css";
import {SubmitHandler, useForm} from "react-hook-form";
import {TextField} from "@mui/material";



function Contacts() {
    return (
        <div className={s.contacts}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`} >

                    <h3>Contacts</h3>
                    {/*<form className={s.form}>*/}
                    {/*    <input type={'text'}/>*/}
                    {/*    <input type={'text'}/>*/}
                    {/*    <textarea/>*/}
                    {/*</form>*/}
                    {/*<button type={'submit'} className={s.button}>Send</button>*/}
                    <ContactForm />
            </div>
        </div>
    );
}

export default Contacts;



const ContactForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            {/*<input {...register("email")} />*/}
            {/*<input {...register("number")} />*/}
            {/*<textarea {...register("message")} />*/}

            <TextField className={s.textField} id="standard-basic" label="Email" variant="standard" {...register("email")} />
            <TextField className={s.textField} id="standard-basic" label="Number" variant="standard" {...register("number")} />

            <TextField
                className={s.textField}
                id="standard-multiline-static"
                label="Your message"
                multiline
                rows={4}
                // defaultValue="Default Value"
                variant="standard"
                {...register("message")}
            />

            <input className={s.button}  type="submit" />
        </form>
    );
}
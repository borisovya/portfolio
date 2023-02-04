import React from "react";
import s from './Contacts.module.scss'
import styleContainer from "../Common/Styles/Container.module.scss";
import {useForm} from "react-hook-form";
import TextField from "@mui/material/TextField";
import {styled} from '@mui/material/styles'
import Title from "../Common/Components/Title/Title";
import Fade from 'react-reveal/Slide';
import {Box, Modal, Typography} from "@mui/material";
import axios from 'axios'


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
    const [open, setOpen] = React.useState(false);
    const [isDisabled, setIsDisabled] = React.useState(false);


    const {register, handleSubmit, reset, trigger, formState: {errors, isValid},} = useForm();

    const triger = () => {
        trigger("email")
    }
    const triger2 = () => {
        trigger("message")
    }

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const onSubmit = async (data) => {
        const templateParams = {
            contact_number: data.number,
            from_name: data.email,
            message: data.message
        };
        try {
            setIsDisabled(true)
            // const response = await emailjs.send('contact_form', 'template_nw74xye', templateParams, 'eKYeukvQGOWd98rgJ')
            // const res = await axios.post('https://smtp-server-nodejs.vercel.app/s', {number: data.number, email: data.email, message: data.message})
            const res = await axios.get('https://smtp-server-nodejs.vercel.app', {
                params: {number: data.number, email: data.email, message: data.message}
            })
            handleOpen()

        } catch (error) {
            console.log('FAILED...', error);
        } finally {
            setIsDisabled(false)
            reset()
        }
    }


    return (
        <Fade bottom>
            <form id='contacts' className={s.form} onSubmit={handleSubmit(onSubmit)}>

                <CustomTextField className={s.textField} label="Email" variant="standard" {...register("email", {
                        required: 'Required',
                        onBlur: triger,
                        minLength: {
                            value: 1,
                            message: ' Email is required'
                        },
                        maxLength: {
                            value: 35,
                            message: ` Max email length is 35 symbols`
                        }
                    }
                )} />
                <span className={s.errorText}>{errors?.email && <span>{errors?.email?.message || 'Error'}</span>}</span>
                <CustomTextField className={s.textField} label="Number" variant="standard" {...register("number")} />
                <CustomTextField className={s.textField}
                                 label="Your message"
                                 multiline
                                 rows={4}
                                 variant="standard"
                                 {...register("message", {
                                         required: 'Required',
                                         onBlur: triger2,
                                         minLength: {
                                             value: 1,
                                             message: ' Message is required'
                                         },
                                         maxLength: {
                                             value: 300,
                                             message: ` Max email length is 300 symbols`
                                         }
                                     }
                                 )} />
                <span className={s.errorText}>{errors?.message &&
                    <span>{errors?.message?.message || 'Error'}</span>}</span>
                <input disabled={isDisabled} className={isDisabled ? s.btnDisabled : s.button} type="submit"
                       value={'Send message'}/>
            </form>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Your message has been sent. Thank you!
                    </Typography>
                </Box>
            </Modal>
        </Fade>
    );
}
import React from "react";
import s from './Contacts.module.css'
import styleContainer from "../Common/Styles/Container.module.css";

function Contacts() {
    return (
        <div className={s.contacts}>
            <div className={`${styleContainer.container} ${s.contactsContainer}`} >

                    <h3>Contacts</h3>
                    <form className={s.form}>
                        <input/>
                        <input/>
                        <textarea/>
                    </form>
                    <button>Send</button>

            </div>
        </div>
    );
}

export default Contacts;
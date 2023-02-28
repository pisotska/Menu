import { useState } from "react";
import styles from "./styles.module.css"

const ContactForm = (props) => {
    const [contactsForm, setContactsForm] = useState({
        firstName: "",
        lastName: "",
        address: "",
        phone: ""
    });

    const handleInputChange = (event) => {
        setContactsForm({
            ...contactsForm,
            [event.target.name]: event.target.value
        })
    }

    const isError = !contactsForm.firstName || !contactsForm.lastName || !contactsForm.address || !contactsForm.phone;


    return (
        <div className={styles.input_wrapper}>
            <input className={styles.input}
                placeholder="Ваше ім'я"
                value={contactsForm.firstName}
                name="firstName"
                onChange={handleInputChange}
                type="text"
            ></input>

            <input className={styles.input}
                placeholder="Ваше прізвище"
                value={contactsForm.lastName}
                name="lastName"
                onChange={handleInputChange}
                type="text"
            ></input>

            <input className={styles.input}
                placeholder="Адрес доставки"
                value={contactsForm.address}
                name="address"
                onChange={handleInputChange}
                type="text"
            />

            <input className={styles.input}
                placeholder="+380"
                type="text"
                name="phone"
                value={contactsForm.phone}
                onChange={handleInputChange}
            />
            {isError && <div className={styles.error}>Усі поля повинні бути заповнені</div>}
            <button className={styles.button} onClick={props.changeStep} disabled={isError} >Відправити</button>

        </div>)
}
export default ContactForm




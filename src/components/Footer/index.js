import styles from "./styles.module.css"
import Instagram from "../header/img/instagram.png"
import Facebook from "../header/img/facebook.png"

const Footer = () => {
    return (
        <div className={styles.footer_container}>
            <div className={styles.footer_icon}>
                <button className={styles.button}><img className={styles.icon} src={Instagram} alt="instagram" /></button>
                <button className={styles.button}><img className={styles.icon} src={Facebook} alt="facebook" /></button>
            </div>
            <div className={styles.phone}>Можете нас знайти за адресою: <br /><span className={styles.text}>вул.Петра Панча</span></div>
            <div className={styles.phone}>Телефон для зв'язку: <br /> <span className={styles.text}>+380634956154</span></div>
            <div className={styles.phone}>Пошта для запитань: <br /><span className={styles.text}>book_table@gmail.com</span></div>
        </div>
    )
}
export default Footer
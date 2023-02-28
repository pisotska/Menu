import { useEffect } from "react"
import styles from "./styles.module.css"
import { useDispatch } from "react-redux"
import { cleanCart } from "../../actions"




const FinishForm = ({ handleFinishStep }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        setTimeout(handleFinishStep, 3000)
        setTimeout(() => dispatch(cleanCart()), 1000)
    })
    return (
        <div className={styles.message}>Вітаю! Ваше замовлення прийняте.<br />
            Очікуйте дзвінок від оператора</div>
    )
}

export default FinishForm
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css"
import { addDish } from "../../actions";

const MenuCard = (props) => {
    const addDishToCart = () => {
        dispatch(
            addDish({
                id: props.id,
                img: props.img,
                title: props.title,
                price: props.price,
            })
        );
    };

    const dispatch = useDispatch();


    const list = useSelector((state) => state.cart);

    const isMenuCardInCart = list.find(item => item.id === props.id)






    return (
        <div className={styles.card_container}>
            <div className={styles.card_img}>
                <img className={styles.img} src={props.img} alt="" />
            </div>
            <div className={styles.card_title}>
                <div className={styles.title}>{props.title}</div>
                <div className={styles.weight}>{props.weight}</div>
            </div>

            <div className={styles.card_author}>{props.author}</div>
            <div className={styles.card_description}>{props.description}</div>
            <div className={styles.card_footer}>
                <div className={styles.price}>{props.price} грн</div>
                <button className={styles.button} disabled={Boolean(isMenuCardInCart)} onClick={addDishToCart}  >Замовити</button>
            </div>

        </div>
    )
}

export default MenuCard
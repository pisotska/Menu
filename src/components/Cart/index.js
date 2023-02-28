import { useDispatch } from "react-redux";
import styles from "./styles.module.css"
import { deleteDish } from "../../actions";

const Cart = (props) => {

    const dispatch = useDispatch();
    return (
        <div className={styles.cart_container} >

            <div className={styles.cart_box}>
                <div className={styles.cart_img}>
                    <img src={props.img} alt="" />
                </div>
                <div className={styles.title}>{props.title}</div>

                <div className={styles.price}>{props.price} грн</div>
                <button className={styles.button} onClick={() => dispatch(deleteDish(props.id))}>Remove</button>
            </div>
        </div>
    );
};

export default Cart;
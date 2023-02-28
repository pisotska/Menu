import Menu from "../menu";
import CART from "./img/cart.png"

import styles from "./styles.module.css"

const Header = (props) => {

  return (
    <div className={styles.header}>
      <div className={styles.header_line}>
        <div className={styles.header_name}>Книжковий <p className={styles.word}>стіл</p></div>
        <div>{<Menu />}</div>
        <div className={styles.header_icon} >
          <img className={styles.cart} src={CART} alt="cart" onClick={props.handleOpenModal} />
          <span className={styles.cart_counter}>{props.list.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
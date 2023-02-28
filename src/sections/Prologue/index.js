import SubHeader from "../../components/Subheader"
import MenuCard from "../../components/MenuCard"
import styles from "./styles.module.css"
import { useSelector } from "react-redux";

const Prologue = () => {
    const cards = useSelector((state) => state.menuCard.prologue);
    return (
        <div>
            <SubHeader title="Зав'язка" postTitle="Салати" id="prologue" />
            <div className={styles.cards_wrapper}>
                {cards.map((menuItem) => (
                    <MenuCard {...menuItem} />
                ))}
            </div>
        </div>
    )
}

export default Prologue
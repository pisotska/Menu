import SubHeader from "../../components/Subheader"
import MenuCard from "../../components/MenuCard"
import styles from "./styles.module.css"
import { useSelector } from "react-redux";

const Culmination = () => {
    const cards = useSelector((state) => state.menuCard.culmination);
    return (
        <div>
            <SubHeader title="Кульмінація" postTitle="Перші страви" id="culmination" />
            <div className={styles.cards_wrapper}>
                {cards.map((menuItem) => (
                    <MenuCard {...menuItem} />
                ))}
            </div>
        </div>
    )
}

export default Culmination
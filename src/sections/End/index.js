import SubHeader from "../../components/Subheader"
import MenuCard from "../../components/MenuCard"
import styles from "./styles.module.css"
import { useSelector } from "react-redux";

const End = () => {
    const cards = useSelector((state) => state.menuCard.end);
    return (
        <div>
            <SubHeader title="Розв'язка" postTitle="Основні страви" id="end" />
            <div className={styles.cards_wrapper}>
                {cards.map((menuItem) => (
                    <MenuCard {...menuItem} />
                ))}
            </div>
        </div>
    )
}

export default End
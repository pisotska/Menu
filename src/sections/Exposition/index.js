import SubHeader from "../../components/Subheader"
import MenuCard from "../../components/MenuCard"
import styles from "./styles.module.css"
import { useSelector } from "react-redux";

const Exposition = () => {
    const cards = useSelector((state) => state.menuCard.exposition);
    return (
        <div>
            <SubHeader title="Експозиція" postTitle="Закуски" id="exposition" />
            <div className={styles.cards_wrapper}>
                {cards.map((menuItem) => (
                    <MenuCard {...menuItem} />
                ))}
            </div>
        </div>
    )
}

export default Exposition